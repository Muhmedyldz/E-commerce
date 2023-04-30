
function productRoute(){
const resultItemDom = document.querySelectorAll(".search-results .result-item");

    resultItemDom.forEach((element)=>{
        element.addEventListener("click",()=>{
            const id = element.dataset.id;
            if(id){
                localStorage.setItem("productId",JSON.stringify(id));
                window.location.href = "product-details.html"
            }
        });
    });
};

function searchFunction(data){
const searchWrapper = document.querySelector(".search-results .results");
let results = "";
data.forEach(element => {
    results +=`
    <a href="#" class="result-item" data-id=${element.id}>
        <img src=${element.img.singleImage} class="search-thumb">
        <div class="search-info">
            <h4>${element.name}</h4>
            <span class="search-sku">SKU:PD0016</span>
            <span class="search-price">${element.price.newPrice}</span>
        </div>
    </a>`
});
searchWrapper.innerHTML = results;
productRoute();

const searchInputDom =document.querySelector(".search-form input")
let value ="";
let filtered = [];
searchInputDom.addEventListener("input",(e)=>{
    value = e.target.value;
    value = value.trim().toLowerCase();
    filtered = data.filter((element)=> element.name.trim().toLowerCase().includes(value));
    let results = "";
    if(filtered.length > 1){
        searchWrapper.style.gridTemplateColumns = "1fr 1fr";
        filtered.forEach((element)=>{
            results +=`
            <a href="#" class="result-item" data-id=${element.id}>
                <img src=${element.img.singleImage} class="search-thumb">
                <div class="search-info">
                    <h4>${element.name}</h4>
                    <span class="search-sku">SKU:PD0016</span>
                    <span class="search-price">${element.price.newPrice}</span>
                </div>
            </a>`
        });
        searchWrapper.innerHTML = results;
    }else if(filtered.length < 2){
        searchWrapper.style.gridTemplateColumns = "1fr";
        if(filtered.length == 0){
            searchWrapper.innerHTML = 
            `<a href="#" class="result-item" style="justify_content: center">
            The product you were looking for was not found
            </a>`;
        }else{          
        filtered.forEach((element)=>{
            results +=`
            <a href="#" class="result-item" data-id=${element.id}>
                <img src=${element.img.singleImage} class="search-thumb">
                <div class="search-info">
                    <h4>${element.name}</h4>
                    <span class="search-sku">SKU:PD0016</span>
                    <span class="search-price">${element.price.newPrice}</span>
                </div>
            </a>`
        });
        searchWrapper.innerHTML = results;
        }
    }

    productRoute();
});
};

export default searchFunction;