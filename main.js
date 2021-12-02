// Selecionando Botões
const aumNum = document.getElementById("btn_aumNum")
const dimNum = document.getElementById("btn_dimNum");
const zerarNum = document.getElementById("btn_zerarNum");
const dobrar = document.getElementById("btn_dobrar");
const triplicar = document.getElementById("btn_triplicar")
const contador = document.getElementById("btn_contador");

let contagem = 0;
contador.innerHTML = contagem;

aumNum.addEventListener("click", function aumentar(){
    contador.innerHTML = ++contagem
});

dimNum.addEventListener("click", function diminuir(){
    contador.innerHTML = contagem =  --contagem
});
zerarNum.addEventListener("click",function zerar(){
    contador.innerHTML = contagem = 0;
});
dobrar.addEventListener("click", function dobrar(){
    contador.innerHTML = contagem = contagem * 2;
});
triplicar.addEventListener("click", function triplicar(){
    contador.innerHTML = contagem = contagem * 3;
});