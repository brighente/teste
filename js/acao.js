var moldura = document.getElementById("moldura")
var fotos = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"]
var indice = 0
var temporizador
var botaoVoltar = document.getElementById("btnVoltar")
var botaoAvancar = document.getElementById("btnAvancar")

const tempoIntervalo = 2000


window.onload = inicio;


function inicio(){
    botaoAvancar.onclick = avancarFoto
    botaoVoltar.onclick = voltarFoto
    mostrarFoto()
    automaticoFoto()
}

function voltarFoto(){
    if(indice > 0){
        indice--
    } else {
        indice = fotos.length-1;
    }
    mostrarFoto()
    clearInterval(temporizador)
    automaticoFoto()
}

function avancarFoto(){
    if(indice < fotos.length - 1){
        indice++
    } else {
        indice = 0;
    }
    mostrarFoto()
    clearInterval(temporizador)
    automaticoFoto()
}

function automaticoFoto(){
    temporizador = setInterval(avancarFoto, tempoIntervalo)
}

function mostrarFoto(){
    moldura.src = "imagem/" + fotos[indice]
}
