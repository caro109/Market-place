const mainContent = document.getElementById("main-Container")

const createCard = (product)=>{
  const cardProduct = document.createElement("div");
  const nameProduct = document.createElement("h2");
  const priceProduct = document.createElement("p");
  const quantityProduct=document.createElement("p");
  const imgProduct = document.createElement("img");
  const btnProduct = document.createElement('button');

  nameProduct.textContent = product.name;
  priceProduct.textContent = product.price;
  quantityProduct.textContent = product.quantity;
  imgProduct.setAttribute("src",product.image);
  imgProduct.setAttribute("alt",product.image);
  btnProduct.textContent = "Add to Cart"

  
  cardProduct.appendChild(nameProduct);
  cardProduct.appendChild(imgProduct);
  cardProduct.appendChild(priceProduct);
  cardProduct.appendChild(quantityProduct);
  cardProduct.appendChild(btnProduct);
  
  cardProduct.classList.add("card");
  
  mainContent.appendChild(cardProduct);
}


const products = [
  {name:"rice", price:"5$",quantity:5,image:"Images/rice.jpeg"},
  {name:"potato", price:"5$",quantity:5,image:"Images/potato.jpeg"},
  {name:"Meat", price:"5$",quantity:5,image:"Images/Meat.jpeg"},
  {name:"Milk", price:"5$",quantity:5,image:"Images/milk.jpeg"},
];

function renderCards(){
  products.map(function(product){
    return createCard(product)
  })
}

window.addEventListener("DOMContentLoaded", renderCards);