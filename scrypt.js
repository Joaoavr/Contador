var numbering = document.getElementsByClassName("numero")
var numero = 0;

function  increment() {
    numero = numero + 1;
    numbering.innerHTML = numero;
}

function  decrement() {
    numero = numero - 1;
    numbering.innerHTML = numero;
}