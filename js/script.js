var captar = "";
var heightPage = document.body.scrollHeight;

function criptografar() {

    captar = document.getElementById("texto__area").value;
    console.log(captar);
    captar = captar.replace(/e/gi, "enter");
    captar = captar.replace(/i/gi, "imes");
    captar = captar.replace(/a/gi, "ai");
    captar = captar.replace(/o/gi, "ober");
    captar = captar.replace(/u/gi, "ufat");

    document.getElementById("resultado").style.display = "flex";
    document.getElementById("botao__copiar").style.display = "inline";
    document.getElementById('retangulo__resultado').value = captar;
    document.getElementById("retangulo__texto1").style.display = "none";
    document.getElementById("retangulo__texto2").style.display = "none";
    document.getElementById("retangulo__img").style.display = "none"
    document.getElementById('texto__area').value = "";

    window.scrollTo(0, heightPage);
}

function descriptografar() {

    captar = document.getElementById('texto__area').value;

    captar = captar.replace(/enter/g, "e");
    captar = captar.replace(/imes/g, "i");
    captar = captar.replace(/ai/g, "a");
    captar = captar.replace(/ober/g, "o");
    captar = captar.replace(/ufat/g, "u");

    document.getElementById("resultado").style.display = "flex";
    document.getElementById("botao__copiar").style.display = "inline";
    document.getElementById('retangulo__resultado').value = captar;
    document.getElementById("retangulo__texto1").style.display = "none";
    document.getElementById("retangulo__texto2").style.display = "none";
    document.getElementById("retangulo__img").style.display = "none"
    document.getElementById('texto__area').value = "";

    window.scrollTo(0, heightPage);
}

function copiar() {
    let copiado = document.getElementById('retangulo__resultado');

    copiado.select();
    copiado.setSelectionRange(0, 99999);

    document.execCommand("copy");
    window.scrollTo(0, 0);

}