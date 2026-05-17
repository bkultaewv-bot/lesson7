let count = prompt("Введите количество кубиков");

let container = document.getElementById("container");

for(let i = 1; i <= count; i++){

    let square = document.createElement("div");

    square.classList.add("square");

    square.innerText = i;

    // разные цвета как на скрине
    if(i % 3 === 1){
        square.style.background = "#b80d14";
    }
    else if(i % 3 === 2){
        square.style.background = "#0d0d14";
    }
    else{
        square.style.background = "#0f6612";
    }

    container.appendChild(square);
}