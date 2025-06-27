
class NumeroMagico {
    constructor () {
        this._tentativas = 5;
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
    console.log(tentativa);
    if (tentativa == numero.GET_RESPOSTA) {
        document.getElementById("parabens").textContent = `Parabens você acertou! com o total de ${numero.GET_TENTATIVAS - 5} tentativas.`;
        return 0
    }else if (numero.GET_TENTATIVAS <= 0){
        document.getElementById("parabens").textContent = "Você Perdeu :/ ";
    }
    else {
        document.getElementById("chute").value = "";
        numero._tentativas = numero._tentativas - 1;
        document.getElementById("tentativas").textContent = `tentativas restantes: ${numero.GET_TENTATIVAS}`;
    }
}
