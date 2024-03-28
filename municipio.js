//2. Escreva um script para ler o número total de eleitores de um município, o número de votos brancos, 
//nulos e válidos. Calcular e escrever o percentual que cada um representa em relação 
//ao total de eleitores.

const prompt = require('prompt-sync')();
var n = Number(prompt('Qual o número de eleitores desse município ? '));
var n2 = Number(prompt('Quantos votos em branco houveram ? '));
var n3 = Number(prompt('Quantos votos em nulos houveram ? '));
var n4 = Number(prompt('Quantos votos em válidos houveram ? '));

if ((n2 + n3 + n4) != n){
    console.log('inválido pois o número de votos inseridos não é igual ao número de eleitores');
}else{
    console.log('Votos brancos percentual: '+(n2/n)*100+'%','Votos nulos percentual: '+(n3/n)*100+'%','Votos válidos percentual: '+(n4/n)*100+'%');
}
