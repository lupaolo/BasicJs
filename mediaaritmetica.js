//1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética 
// das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado 
//para média inferior a 7.0.

const prompt = require('prompt-sync')();
var n1 = Number(prompt('Qual a primeira nota aluno? '));
var n2 = Number(prompt('Qual a segunda nota ? '));
var n3 = Number(prompt('Qual a terceira nota ? '));
var n4 = Number(prompt('Qual a quarta nota ? '));

var resultado = n1+n2+n3+n4;
var media = resultado/4

console.log('A média é '+media);

if(media >= 7){
    console.log('Aluno aprovado')
}else{
    console.log('Aluno reprovado')
}

