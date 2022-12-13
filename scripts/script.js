
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})

function calcularQuadrado(){
    let numero = document.querySelector("#numero")
    let areaResposta = document.querySelector("#areaRespostaNumeroAoQuadrado")
    let resultado = numero.value * numero.value

    areaResposta.innerHTML = numero.value + " ao quadrado é " + resultado
}

function responderTeste(){
    let respostas = document.getElementsByName("resposta")
    let areaResultado = document.querySelector("#areaRespostaTestePortugues")
    let btn = document.querySelector("#btn")
    for(let i=0; i<respostas.length; i++){
        if(respostas[2].checked == true){
           areaResultado.innerHTML = "Acertou"
        }
        else{
            areaResultado.innerHTML = "Errou"
        }
    }
    
}

function calcularMedia(){
    let nota1 = document.querySelector("#nota1")
    let nota2 = document.querySelector("#nota2")
    let media = ((parseInt(nota1.value) + parseInt(nota2.value)) / 2)
    let MostrarMedia = document.getElementById("areaRespostaCalculaMedia")

    if(media > 6) {
        MostrarMedia.innerHTML = "Media " + media + " Aluno passou"
    }
    else if(nota1.value === "" || nota2.value === ""){
        MostrarMedia.innerHTML = "Insira as duas notas"}

    else{
        MostrarMedia.innerHTML = "Media " + media + " aluno reprovado"
    }
}

let espaco = document.querySelector(".area")
espaco.addEventListener('click', clicar)
espaco.addEventListener('mouseenter', entrar)
espaco.addEventListener('mouseout', sair)

function clicar() {
    espaco.innerText = "Clicou!"
    espaco.style.background = 'tomato'
}

function entrar(){
    espaco.innerText = "Entrou!"
    espaco.style.background = 'green'
}

function sair(){
    espaco.innerText = "Saiu!"
    espaco.style.background = 'tomato'
}

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cron;


function start() {
    cron = setInterval(() => { timer(); }, tempo);
}


function pause() {
    clearInterval(cron);
}


function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}


function timer() {
    ss++; 

    if (ss == 60) { 
        ss = 0; 
        mm++; 

        if (mm == 60) { 
            mm = 0;
            hh++;
        }
    }

   
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    
    document.getElementById('counter').innerText = format;

  
    return format;
}