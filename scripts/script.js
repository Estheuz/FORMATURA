
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



//////////

function criarPersonagem() {
    let nome = document.getElementById("nome")
    let areaNome = document.getElementById("areaNome")


    let sexoEscolhido = document.getElementsByName("sexo")
    let homem = document.getElementById("areaSexoHomem")
    let mulher = document.getElementById("areaSexoMulher")

    let classes = document.getElementById("classes")
    let areaClasse = document.getElementById("areaClasse")

    let paladino = document.getElementById("classePaladino")
    let necromante = document.getElementById("classeNecromante")
    let mago = document.getElementById("classeMago")
    let vagabundo = document.getElementById("classeVagabundo")
    let assassino = document.getElementById("classeAssassino")
    let barbaro = document.getElementById("classeBarbaro")

    let btn = document.getElementById("btn")
    let btn2 = document.getElementById("btn2")


    areaNome.innerHTML = nome.value;



    for (let i = 0; i < sexoEscolhido.length; i++) {
        if (sexoEscolhido[0].checked == true) {
            homem.hidden = false
            mulher.hidden = true
        }
        else if (sexoEscolhido[1].checked == true) {
            mulher.hidden = false
            homem.hidden = true
        }
    }

    areaClasse.innerHTML = classes.value;

    if (classes.value == "paladino") { paladino.hidden = false }
    else if (classes.value == "necromante") { necromante.hidden = false }
    else if (classes.value == "mago") { mago.hidden = false }
    else if (classes.value == "vagabundo") { vagabundo.hidden = false }
    else if (classes.value == "assassino") { assassino.hidden = false }
    else if (classes.value == "barbaro") { barbaro.hidden = false }


    btn.disabled = true;
    btn2.hidden = false
}

function jogar() {
    let ataque = document.getElementById("ataque")
    let ataqueEspecial = document.getElementById("ataqueEspecial")

    ataque.hidden = false
    ataqueEspecial.hidden = false
}

function ataque() {
    let areaInforCombate1 = document.getElementById("areaInformacaoCombate1")
    let areaInforCombate2 = document.getElementById("areaInformacaoCombate2")
    let valorAtaque = parseInt(Math.random() * 10)
    let valorAtaqueMonstro = parseInt(Math.random() * 10)


    areaInforCombate1.innerHTML = "você deu " + valorAtaque + " de dano";
    areaInforCombate2.innerHTML = "você recebeu " + valorAtaqueMonstro + " de dano";

    if (valorAtaque > 12) {
        areaInforCombate1.innerHTML = "você você matou o monstro";
    }
    else if (valorAtaqueMonstro > 12)
        areaInforCombate2.innerHTML = "O monstro matou você";

}

function ataqueEspecial() {
    let areaInforCombate1 = document.getElementById("areaInformacaoCombate1")
    let areaInforCombate2 = document.getElementById("areaInformacaoCombate2")
    let valorAtaqueEspecial = parseInt(Math.random() * 15)
    let valorAtaqueMonstro2 = parseInt(Math.random() * 10)

    areaInforCombate1.innerHTML = "você deu " + valorAtaqueEspecial + " de dano";
    areaInforCombate2.innerHTML = "você recebeu " + valorAtaqueMonstro2 + " de dano";

    if (valorAtaqueEspecial > 12) {
        areaInforCombate1.innerHTML = "você você matou o monstro";
    }
    else if (valorAtaqueMonstro2 > 12)
        areaInforCombate2.innerHTML = "O monstro matou você";
}

