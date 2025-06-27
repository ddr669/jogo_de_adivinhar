
class NumeroMagico {
    constructor () {
        this._tentativas = 10;
        this._RESPOSTA = Number(Math.random().toFixed(2) * 100);
    }
    get GET_TENTATIVAS(){
        return this._tentativas;
    }
    get GET_RESPOSTA(){
        return this._RESPOSTA;
    }
}
const numero = new NumeroMagico();

function okayPopup(){
    let popup = document.getElementById("PopUp");
    popup.classList.toggle("done");
    
    document.getElementById("tentativas").textContent = `tentativas restantes: ${numero.GET_TENTATIVAS}`;
};

function verificaNumero() {
    let tentativa = parseInt(document.getElementById("chute").value);
    console.log(numero.GET_TENTATIVAS);
    if (isNaN(tentativa)) {
        alert("Tente um numero");
        return 0;
    }
    if (tentativa > 100 || tentativa < -1) {
        alert("Tente um numero de 0 a 100");
        return 0;

    }
    console.log(tentativa);
    if (tentativa == numero.GET_RESPOSTA) {
        document.getElementById("parabens").textContent = `Parabens você acertou! com o total de ${10-numero.GET_TENTATIVAS} tentativas.`;
        return 0
    }else if (numero.GET_TENTATIVAS < 1){
        document.getElementById("parabens").textContent = "Você Perdeu :/";
        document.getElementById("resposta").textContent = `A resposta era ${numero.GET_RESPOSTA}`;
    }
    else {
        document.getElementById("chute").value = "";
        numero._tentativas = numero._tentativas - 1;
        document.getElementById("dica").textContent =  tentativa < numero.GET_RESPOSTA ? "O numero é maior":"O numero é menor";
        document.getElementById("tentativas").textContent = `tentativas restantes: ${numero.GET_TENTATIVAS}`;
    }
}
