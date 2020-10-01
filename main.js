// let array = [
//     {
//         Name: "Jesper",
//         Age: 20,
//         GoodAt: "Everything"
//     },
//     {
//         Name: "Ella",
//         Age: 19,
//         GoodAt: "More than Jesper"
//     },
//     {
//         Name: "Erik",
//         Age: 20,
//         GoodAt: "Less than Jesper"
//     }
// ]

// for(let i = 0; i < array.length; i++){
    
//     array[1].GoodAt = "Jesper is best";
//     console.log(array[i])
// }

const circles = document.querySelectorAll(".circle");
const buttons = document.querySelectorAll("button");

function chooseColor(){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", ()=>{
            if(buttons[i].classList.contains("black")){
                black();
                
            }
            else if(buttons[i].classList.contains("crimson")){
                crimson();
                
            }
            else if(buttons[i].classList.contains("blue")){
                blue();
                
            }
        })
    }

    
}

function black(){
    for(let i = 0; i < circles.length; i++){
        circles[i].classList.add("black");
        circles[i].classList.remove("crimson");
        circles[i].classList.remove("blue");
    }
}
function crimson(){
    for(let i = 0; i < circles.length; i++){
        circles[i].classList.add("crimson");
        circles[i].classList.remove("black");
        circles[i].classList.remove("blue");
    }
}
function blue(){
    for(let i = 0; i < circles.length; i++){
        circles[i].classList.add("blue");
        circles[i].classList.remove("crimson");
        circles[i].classList.remove("black");
    }
}

chooseColor();