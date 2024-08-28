let products = {
  data: [
    {
      productName: "Regular white T-shirt",
      category: "Topwear",
      price: 30,
      image: "white-tshirt.jpg",
    },
    {
      productName: "Biege Short Skirt",
      category: "Bottomwear",
      price: 49,
      image: "short-skirt.jpg",
    },
    {
      productName: "Sporty Smartwatch",
      category: "watch",
      price: 99,
      image: "sporty-smartwatch.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: 29,
      image: "knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: 129,
      image: "black-leather-jackets.jpg",
    },
    {
      productName: "Stylish Pink Trouser",
      category: "Bottomwear",
      price: 79,
      image: "pink-trousers.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: 189,
      image: "brown-jackets.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: 79,
      image: "comfy-gray-pants.jpg",
    },
  ],
};

for (let i of products.data) {
  //card creation
  let card = document.createElement("div");
  //card should have a category and should hidden initially
  card.classList.add("card",i.category,"hide");
  //img div
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  //given src image for the attribute
  image.setAttribute("src", i.image);
  //set imagecontainer as a parent of image
  imageContainer.appendChild(image);
  //set card as parent of imageContainer
  card.appendChild(imageContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h3");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  card.appendChild(container);

  //price

  let price = document.createElement("h5");
  price.innerText = "$ " + i.price;
  container.appendChild(price);

  document.getElementById("products").appendChild(card);
}

//parameter passes from button (parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((btn) => {
    //create if value equal to innertext
    if (value.toUpperCase() === btn.innerText.toUpperCase()) {
      btn.classList.add("active");
    } 
    else{
      btn.classList.remove("active");
    }
  });


  //selecting all cards
  let elements = document.querySelectorAll(".card");
  //cards in loop
  elements.forEach((element)=>{
    //displaying all cards on all button click
    if(value == 'all'){
      element.classList.remove('hide');
    }
    else{
      //check if the element containers category class
      if(element.classList.contains(value)){
        //display elements based on category
        element.classList.remove('hide');
      }else{
        element.classList.add("hide");
      }
    }
  });
}




//Search button click
document.getElementById("search").addEventListener('click',()=>{
  //initiallization
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll('.product-name');
  let cards = document.querySelectorAll('.card');
  // console.log(searchInput);
// 

  //loop through all elements 
  elements.forEach((element,index)=>{
    if(element.innerHTML.includes(searchInput.toUpperCase())){
      cards[index].classList.remove("hide");
    }
    else{
      cards[index].classList.add("hide");

    }
  })
})

// initially display all products
window.onload = () => {
  filterProduct('all');
};
