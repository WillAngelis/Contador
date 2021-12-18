// Selecionando Botões
const aumNum = document.getElementById("btn_aumNum")
const dimNum = document.getElementById("btn_dimNum");
const zerarNum = document.getElementById("btn_zerarNum");
const dobrar = document.getElementById("btn_dobrar");
const triplicar = document.getElementById("btn_triplicar")
const contador = document.querySelector(".contador");

let contagem = 0;

contador.textContent = contagem;

aumNum.addEventListener("click",() => contador.innerHTML = ++contagem ); //bnt aumentar 

dimNum.addEventListener("click",() => contador.innerHTML = contagem =  --contagem); // btn diminuir

zerarNum.addEventListener("click",() => contador.innerHTML = contagem = 0); // btn zerar

dobrar.addEventListener("click", () => contador.innerHTML = contagem = contagem * 2); // btn dobrar

triplicar.addEventListener("click", () => contador.innerHTML = contagem = contagem * 3); // btn triplicar
