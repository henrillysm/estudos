const prompt = require("prompt-sync")({ sigint: true });
function soma(a, b) {
    return a + b
};

let resultado = soma(2, 2);
console.log(resultado);

const celular = {
    cor: "preto",
    ligar: function() {
        alert("ligando")
    }
};
console.log(celular.cor);

