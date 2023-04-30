import { product1 } from "./glide.js";

let card = localStorage.getItem("card")
  ? JSON.parse(localStorage.getItem("card"))
  : [];

const addToCard = (products) => {
  const cardItems = document.querySelector(".header-card-count");
  const buttons = [...document.getElementsByClassName("add-to-card")];

  buttons.forEach((element) => {
    const inCard = card.find(
      (item) => item.id === Number(element.dataset.mami)
    );
    if (inCard) {
      element.setAttribute("disabled", "disabled");
    } else {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.target.dataset.mami;
        const findProduct = products.find(
          (product) => product.id == Number(id)
        );
        card.push({ ...findProduct, quantity: 1 });
        localStorage.setItem("card", JSON.stringify(card));
        element.setAttribute("disabled", "disabled");
        cardItems.innerHTML = card.length;
      });
    }
  });
};

const productRoute= ()=>{
  const productLink=document.getElementsByClassName("product-link");

  Array.from(productLink).forEach((element)=>{
    element.addEventListener("click",(e)=>{
      e.preventDefault();
      const id = e.target.dataset.id;
      localStorage.setItem("productId",JSON.stringify(id));
      window.location.href="product-details.html";
    });
  });
};

const productsFnction = (products) => {
  const productsContainer = document.getElementById("product-list");

  let results = "";
  products.forEach((element) => {
    results += ` <li class="product-item glide__slide">
        <div class="product-image">
          <a href="#">
            <img src=${element.img.singleImage} class="img1">
            <img src=${element.img.thumbs[1]} class="img2">
          </a>
        </div>
        <div class="product-info">
          <a href="#" class="product-title">
            ${element.name}
          </a>
          <ul class="product-star">
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-fill"></i>
            </li>
            <li>
              <i class="bi bi-star-half"></i>
            </li>
          </ul>
          <div class="product-prices">
            <strong>${element.price.newPrice.toFixed(2)}</strong>
            <span>$${element.price.oldPrice.toFixed(2)}</span>
          </div>
          <span class="product-discount">
            -${element.discount}%
          </span>
          <div class="product-links">
            <button class="add-to-card" data-id=${element.id}>
              <i class="bi bi-basket-fill"></i>
            </button>
            <button>
              <i class="bi bi-heart-fill"></i>
            </button>
            <a href="#" class="product-link" data-id=${element.id}>
              <i class="bi bi-eye-fill"></i>
            </a>
            <a href="#">
              <i class="bi bi-share-fill"></i>
            </a>
          </div>
        </div>
      </li>`;
    productsContainer ? (productsContainer.innerHTML = results) : "";
    addToCard(products);
  });
  product1();
  productRoute();
};


export default productsFnction;
