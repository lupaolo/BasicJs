//9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.

const prompt = require("prompt-sync")();
var num1 = parseFloat(prompt("Qual o primeiro número:"));
var num2 = parseFloat(prompt("Qual o segundo número:"));
console.log("O resultado do calculo é: " + (num1 + num2) * num1);
