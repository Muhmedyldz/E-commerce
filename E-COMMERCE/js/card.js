let card = localStorage.getItem("card")
  ? JSON.parse(localStorage.getItem("card"))
  : [];

const removeCardItem = () => {
  const btnDeleteCard = document.querySelectorAll(".delete-card");
  const cardItems = document.querySelector(".header-card-count");
  btnDeleteCard.forEach((element) => {
    element.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      card = card.filter((item) => item.id !== Number(id));
      displayCardProduct();
      localStorage.setItem("card", JSON.stringify(card));
      cardItems.innerHTML = card.length;
      saveCardValues();
    });
  });
};

const displayCardProduct = () => {
  const cardWrapper = document.querySelector(".card-wrapper");
  let results = "";

  card.forEach((element) => {
    results += `            
    <tr class="card-item">
    <td></td>
    <td class="card-image">
    <img src=${element.img.singleImage} />
    <i class="bi bi-x delete-card" data-id=${element.id}></i>
    </td>
    <td>${element.name}</td>
    <td>${element.price.newPrice.toFixed(2)}</td>
    <td class="product-quantity">${element.quantity}</td>
    <td class="product-subtotal">${(element.price.newPrice * element.quantity).toFixed(2)}</td>
</tr>`;
  });
  cardWrapper ? (cardWrapper.innerHTML = results) : "";
  removeCardItem();
};

displayCardProduct();

const saveCardValues = () => {
  const cardTotal = document.getElementById("card-total");
  const subtotal = document.getElementById("subtotal");
  const fastCargo = document.getElementById("fast-cargo");

  let itemTotal = 0;

  card.length > 0 &&
    card.map((item) => (itemTotal += item.price.newPrice * item.quantity));

  subtotal.innerHTML = `$${itemTotal.toFixed(2)}`;

  const fastCargoPrice = 15;
  fastCargo.addEventListener("change",(e)=>{
    if(e.target.checked){
      cardTotal.innerHTML = `$${(itemTotal + fastCargoPrice).toFixed(2)}`;
    }
    else{
      cardTotal.innerHTML = `$${itemTotal.toFixed(2)}`;
    }
  })
  cardTotal.innerHTML = `$${itemTotal.toFixed(2)}`;
};


saveCardValues();