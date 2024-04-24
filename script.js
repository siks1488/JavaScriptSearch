const closeButton = document.querySelectorAll('.close');
const search = document.querySelector('input[type="search"]');
const button = document.querySelector(`button`);
const functiondiv = document.querySelector(`.function`);
const arrays = document.querySelector('.arrays');
const textcolor = document.querySelector(`.text-color`);
const mathfloor = document.querySelector(`.mathfloor`)

button.addEventListener("click",function(){
    if(search.value.toLowerCase() === "function"){
        functiondiv.classList.remove("hidden");
    } else if(search.value.toLowerCase() === "arrays"){
        arrays.classList.remove("hidden");
    } else if (search.value.toLowerCase()==="text color"){
        textcolor.classList.remove ("hidden");
    } else if (search.value.toLowerCase()==="math.floor()"){
        mathfloor.classList.remove("hidden");
    }
});

closeButton.forEach(function(closeButton){
    closeButton.addEventListener("click",function(){
        this.parentElement.classList.add(`hidden`);
    });
});
