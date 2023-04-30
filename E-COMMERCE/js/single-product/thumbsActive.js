export const thumbsActiveFunc = () => {
  const thumbs = document.querySelectorAll(".gallery-thumbs .img-fluid");
  const singleImage =document.querySelector("#single-image")
  thumbs.forEach((Element)=>{
    
    Element.addEventListener("click",()=>{
        thumbs.forEach((image)=>{
            image.classList.remove("active");
        })
        singleImage.src =Element.src;
        Element.classList.add("active");
    })
  })
};


