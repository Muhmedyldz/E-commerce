export function valuesFunction(){
    const values =document.querySelectorAll(".values-list span")
    
    values.forEach((element)=>{
        element.classList.remove("active");

        element.addEventListener("click",function(){
            values.forEach((item)=>{
                item.classList.remove("active");
            });
            element.classList.add("active");
        });
        
    });
};

valuesFunction();