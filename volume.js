//8. Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura 
//devem ser fornecidos.
//OBS: V = PI * Raio^2 * Altura]

const prompt = require("prompt-sync")();
var raio = parseFloat(prompt("Qual o raio do cilindro: "));
var altura = parseFloat(prompt("Qual a altura do cilindro: "));

volumere = 3.14 * raio ** 2 * altura;
console.log("O volume do cilindro é: " + volumere);