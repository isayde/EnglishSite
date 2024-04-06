var bloco1 = document.getElementsByClassName("interSquare");
var bloco2 = document.getElementsByClassName("interSquare2");
bloco1[0].style.display = "flex";
bloco2[0].style.display = "none";
function showB1(){
    bloco2[0].style.display = "none";
    bloco1[0].style.display = "flex";
}
function showB2(){
    bloco1[0].style.display = "none";
    bloco2[0].style.display = "flex";
}