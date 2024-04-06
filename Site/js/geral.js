var pontos = document.getElementsByClassName("quantPoints");
var CircleInter = document.getElementsByClassName("CircleInter");
var ativar = 0;
var pontuacao = parseInt(sessionStorage.getItem('pontuacao')) || 0;
var moedas = document.getElementsByClassName('quantMoedas');


document.addEventListener("DOMContentLoaded", function () {
    var contadorValue = sessionStorage.getItem('contadorValue') || 0;

    if (pontos.length > 0 && CircleInter.length > 0) {
        contagemPontos(contadorValue);
        animateCircleInter();
    } else {
        console.error("Elementos não encontrados. Verifique suas classes HTML.");
    }
    if (moedas.length > 0) {
        moedas[0].innerHTML = "Coints:     " + pontuacao;
    }
});

function mostraPontos() {
    if (ativar == 1 && pontos.length > 0) {
        if (pontos[0]) {
            pontos[0].style.display = "flex";
            pontos[0].style.opacity = 1;
            ativar = 0;
            pontuacao += 10;
            if (moedas.length > 0) {
                moedas[0].innerHTML = "Moedas:     " + pontuacao;
            }
            sessionStorage.setItem('pontuacao', pontuacao);
            contadorValue = 30;
            sessionStorage.setItem('contadorValue', contadorValue);
            setTimeout(function () {
                pontos[0].style.opacity = 0;
                CircleInter[0].classList.remove('pulsating');
            }, 2000);
        }
    }
}

function contagemPontos(contadorValue) {
    if (CircleInter.length > 0 && CircleInter[0]) {
        CircleInter[0].style.height = contadorValue + "px";
        CircleInter[0].style.width = contadorValue + "px";
    }
}

function incrementarContador() {
    var contadorValue = parseInt(sessionStorage.getItem('contadorValue')) || 0;

    if (contadorValue < 80) {
        contadorValue++;
        sessionStorage.setItem('contadorValue', contadorValue);
        contagemPontos(contadorValue);
    } else {
        ativar = 1;
        CircleInter[0].classList.add('pulsating');
    }
}

function animateCircleInter() {
    setInterval(function () {
        incrementarContador();
    }, 2000);
}
function toggleMenuResp(){
    var menuRespOpened = document.querySelector('.menu-resp-opened');
    menuRespOpened.classList.toggle('show-resp');
}
function menuPerfil(){
    var perfil = document.querySelector('.menuPerfil');
    perfil.classList.toggle('show');
}
function MostraTrocarMoedas(){
    var mostrar = document.querySelector(".trocarMoedas");
    var foto = document.getElementsByClassName("imagemAntes");
    mostrar.classList.toggle('show');
    foto[0].classList.toggle('imagemDepois');
}
function CalcularValor(){
    var valorSaida = document.getElementById("inputMoedas").value;
    quantPontos = parseInt(valorSaida)/1000;
    document.getElementById("inputPontos").innerHTML = quantPontos.toFixed(2);
}
function FazerTroca() {
    var quantInput = document.getElementById("inputMoedas");
    var quant = parseInt(quantInput.value);
    var correta = document.querySelector('.trocaCorreta');
    var errado = document.querySelector('.trocaErrada');

    if (!isNaN(quant) && quant <= pontuacao) {
        correta.classList.toggle('show');
        pontuacao -= quant;
        quantInput.value = "";
        document.getElementById("inputPontos").innerHTML = "";
        sessionStorage.setItem('pontuacao', pontuacao);
        if (moedas.length > 0) {
            moedas[0].innerHTML = "Moedas: " + pontuacao;
        }
        setTimeout(function () {
            correta.classList.toggle('show');
        }, 2000);
    } else {
        errado.classList.toggle('show');
            setTimeout(function () {
                errado.classList.toggle('show');
            }, 2000);
    }
}
function MostrarTroca(){
    var TrocaDiv = document.getElementsByClassName("spaceTroca");
    TrocaDiv.classList.toggle('show');
}