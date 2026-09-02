const nome = prompt("Digite seu nome completo:");

const data = new Date();

const mensagem = document.querySelector("#mensagem-bem-vindo");

if (mensagem) {
mensagem.innerHTML = `Olá, ${nome}! Hoje é ${data.toLocaleDateString()} às ${data.toLocaleTimeString()}`;
}

console.log("Sistema carregado");