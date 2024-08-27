const typingForm = document.querySelector(".typing-form");
const chatList = document.querySelector(".chat-list");
const toggleThemeButton = document.querySelector("#toggle-theme-button");


let userMessage = null;


//API configuration
const API_KEY = "AIzaSyBUoI3cStZ2XeJbwn3WjYs0sIgIsAnJSHY";
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;




const createMessageElement = (content,...classes)=>{
    const div = document.createElement('div');
    div.classList.add('message',...classes);
    div.innerHTML = content;
    return div;

}

//Show Typing Effect by displaying one by one 
const showTypingEffect = (text,textElement)=>{
    const words = text.split(' ');
    let currentWordIndex =0;


    const typingInterval = setInterval(()=>{

        //append each word to the text element with a space
        textElement.innerText += (currentWordIndex === 0 ? '' : ' ') + words[currentWordIndex++];

        //if all words are displayed
        if(currentWordIndex === words.length){
            clearInterval(typingInterval);
        }
    },75)
}

//Fetch response from The API based on user Message
const generateAPIresponse =async(incomingMessageDiv)=>{
    const textElement = incomingMessageDiv.querySelector(".text");//Get Text Element
    //Send a POST request to the API with the user's Message
    try{
        const response = await fetch(API_URL,{
            method:"POST",
            headers : {"Content-Type":"application/json"},
            body: JSON.stringify({
                contents:[{
                    role: "user",
                    parts:[{text: userMessage}]
                }]
            })
        });

        const data = await response.json();
        console.log(data);
        
        
        const apiResponse = data?.candidates[0].content.parts[0].text;
        showTypingEffect(apiResponse,textElement);
        // textElement.innerText = apiResponse;

        

    }catch(error){
        console.log(error);
        
    } finally{
        incomingMessageDiv.classList.remove("loading")
    }
}

//Show a Loading  animation while waiting for the API response
const showLoadingAnimation=()=>{
    const html = `
    <div class="message-content">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s"
                    alt="" class="avatar">
                <p class="text">
                   
                </p>
                <div class="loading-indicator">
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>

                </div>
            </div>
            <span onclick="copyMessage(this)" class="icon material-symbols-rounded">content_copy</span>
   
   `;
   const incomingMessageDiv = createMessageElement(html,'incoming','loading');
   chatList.appendChild(incomingMessageDiv);

   generateAPIresponse(incomingMessageDiv);
}


//Copy message text to the clipboard
const copyMessage=(copyIcon)=>{
    const messageText = copyIcon.parentElement.querySelector(".text").innerText;
    navigator.clipboard.writeText(messageText);
    copyIcon.innerText = "done"; // show tick icon
    setTimeout(()=> copyIcon.innerText = "content_copy",1000); //Revert icon after 1 second
}

const handleOutGoingChat = ()=>{
    userMessage = typingForm.querySelector('.typing-input').value.trim();
    if(!userMessage) return; //Exit if there is no message

    const html = `
     <div class="message-content">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_b8RHvF2tGS89spiNAqwjVlawqiyub2ojg&s"
        alt="" class="avatar">
        <p class="text">
        
        </p>
    </div>
    
    `;
    const outgoingMessageDiv = createMessageElement(html,'outgoing');
    outgoingMessageDiv.querySelector(".text").innerText = userMessage;
    chatList.appendChild(outgoingMessageDiv);
    typingForm.reset(); //Clear Input Field
    setTimeout(showLoadingAnimation,500);

}
//Toggle between light and Dark themes
toggleThemeButton.addEventListener("click",()=>{
    const isLightMode = document.body.classList.toggle("light_mode");

    localStorage.setItem("themeColor",isLightMode ? "light_mode" : "dark_mode" )
    toggleThemeButton.innerText = isLightMode ? "dark_mode" : "light_mode";
});

// Prevent default form submission and handle outgoing chat 
typingForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    handleOutGoingChat();

});