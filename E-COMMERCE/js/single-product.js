import { thumbsActiveFunc } from "./single-product/thumbsActive.js";
import { singleThumbs } from "./glide.js";
import { zoomFunction } from "./single-product/zoom.js";
import { colorsFunction } from "./single-product/colors.js";
import { valuesFunction } from "./single-product/values.js";
import { tabsFunction } from "./single-product/tabs.js";
import { commentFunction } from "./single-product/comment.js";

const productId = localStorage.getItem("productId")
  ? JSON.parse(localStorage.getItem("productId"))
  : localStorage.setItem("productId", JSON.stringify(1));

const products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : localStorage.setItem("products", JSON.stringify([]));

const findProduct = products.find((item) => item.id === Number(productId));

const productTitle = document.querySelector(".product-title");
const newPrice = document.querySelector(".new-price");
const oldPrice = document.querySelector(".old-price");
const singleImgDOM = document.querySelector("#single-image");

productTitle.innerHTML = findProduct.name;
newPrice.innerHTML = findProduct.price.newPrice.toFixed(2);
oldPrice.innerHTML = findProduct.price.oldPrice.toFixed(2);
singleImgDOM.src = findProduct.img.singleImage;

const galleryThumbs = document.querySelector(".gallery-thumbs");
let result = "";
findProduct.img.thumbs.forEach((element) => {
  result += ` <li class="glide__slide">
  <img
    src=${element}
    class="img-fluid"
  />
 </li>`;
});
galleryThumbs.innerHTML = result;
singleThumbs();
thumbsActiveFunc();

//! add to card

let card = localStorage.getItem("card")
  ? JSON.parse(localStorage.getItem("card"))
  : [];

const findCard = card.find((item) => item.id === findProduct.id);
const btnAddToCard = document.getElementById("add-to-card");
const quantityDom = document.getElementById("quantity")
const cardItems = document.querySelector(".header-card-count");

if (findCard) {
  btnAddToCard.setAttribute("disabled", "disabled");
}
else{
  btnAddToCard.addEventListener("click",function(){
    card.push({...findProduct, quantity: Number(quantityDom.value)});
    localStorage.setItem("card",JSON.stringify(card));
    btnAddToCard.setAttribute("disabled", "disabled");
    cardItems.innerHTML = card.length;
  });
};