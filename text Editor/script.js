// Select buttons and other elements
let optionButton = document.querySelectorAll(".option-button");
let advanceOptionButton = document.querySelectorAll(".adv-option-button");

let fontName = document.getElementById("font-name");
let fontSizeRef = document.getElementById("font-size");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align"); // Changed to querySelectorAll
let spacingButtons = document.querySelectorAll(".spacing"); // Changed to querySelectorAll
let formatButtons = document.querySelectorAll(".format"); // Changed to querySelectorAll
let scriptButtons = document.querySelectorAll(".script"); // Changed to querySelectorAll

// List of fontList
let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive"
];

// Initial setting
const initializer = () => {
  // Function calls for highlighting buttons
  // No highlight for links, unlinks, undo, redo, since they are one-time operations
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);

  //create option for font names
  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
  });

  //fontSize allow  only till 7
  for (let i = 0; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }
  //fontsize defaut size
  fontSizeRef.value = 3;
};

//main logic
const modifyText = (command, defaultUi, value) => {
  //execCommand executes command on selected text
  document.execCommand(command, defaultUi, value);
};

//for basic operation which dont need value and parameter
optionButton.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});

//options that requeire value parameters (e.g. colors , fonts)
advanceOptionButton.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, button.value);
  });
});

//link
linkButton.addEventListener("click", () => {
  let userLink = prompt("Enter the URL");
  if (/http/i.test(userLink)) {
    modifyText(linkButton.id, false, userLink);
  } else {
    userLink = "http:/" + userLink;
    modifyText(linkButton.id, false, userLink);
  }
});

// Highlighting clicked button
const highlighter = (buttons, needsRemoval) => {
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (needsRemoval) {
        let alreadyActive = false;

        // If the currently clicked button is already active
        if (btn.classList.contains("active")) {
          alreadyActive = true;
        }
        highlighterRemover(buttons);
        if (!alreadyActive) {
          // Highlight the clicked button
          btn.classList.add("active");
        }
      } else {
        // If other buttons can be highlighted
        btn.classList.toggle("active");
      }
    });
  });
};

// Attach the initializer function to window.onload
window.onload = initializer;

// Remove active class from all buttons
const highlighterRemover = (buttons) => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
};
