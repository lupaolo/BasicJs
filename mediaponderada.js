//7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. 
//Considerar que a média é ponderada e que o peso das notas é 4 e 6.

const prompt = require("prompt-sync")();
var nota1 = parseFloat(prompt("Qual sua primeira nota?"));
var nota2 = parseFloat(prompt("Qual sua segunda nota?"));

var media = (nota1 * 4 + nota2 * 6) / 10;

console.log("Sua média é: " + media);