export function colorsFunction() {
    const colors = document.querySelectorAll(".color-wrapper");
   
    colors.forEach((element)=>{ 
        element.classList.remove("active");
        element.addEventListener("click",function (){
            colors.forEach((item)=>{
                item.classList.remove("active");
            })
            element.classList.add("active")
        });
    });
}

colorsFunction();