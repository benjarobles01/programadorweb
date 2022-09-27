const caja = document.getElementById("caja");
const body = document.getElementById("bodycolor");

function cambiocolor1() {
    body.style.backgroundColor="red"
};

function changeColor2() {
    body.style.backgroundColor="blue"
};

function changeColor3() {
    body.style.backgroundColor="black"
};



caja.addEventListener("click" , cambiocolor1);
caja2.addEventListener("click" , changeColor2);
caja3.addEventListener("click" , changeColor3);