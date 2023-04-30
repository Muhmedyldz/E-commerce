import headerFunction from "./header.js";
import productsFunction from "./products.js";
import searchFunction from "./search.js";



//! add product to localstoreage start
/* const arr= ["elma","armut","şeftali"]
localStorage.setItem("meyveler",JSON.stringify(arr))

console.log(JSON.parse(localStorage.getItem("meyveler"))); */

const getData = async () => {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products",JSON.stringify(data)) : [];
  productsFunction(data);
  searchFunction(data);
};

getData();

const products = JSON.parse(localStorage.getItem("products"))

const cardItems = document.querySelector(".header-card-count");

cardItems.innerHTML = localStorage.getItem("card") ? JSON.parse(localStorage.getItem("card")).length : "0";

//! add product to localstoreage end


//! modal dialog
const modalDialog = document.querySelector(".modal-dialog");
const modalContent = document.querySelector(".modal-content");
const btnClose = document.querySelector(".modal-close");

btnClose.addEventListener("click",()=>{
  modalDialog.classList.remove("show");
});

document.addEventListener("click",(e)=>{
  if(!e.composedPath().includes(modalContent)){
    modalDialog.classList.remove("show");
  }
});

setTimeout(()=>{
  modalDialog.classList.add("show");
},2500);

//! modal dialog

