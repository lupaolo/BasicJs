//4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
//distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do 
//distribuidor seja de 28% e os impostos de 45%, escrever um script para ler o custo de fábrica 
//de um carro, calcular e escrever o custo final ao consumidor.

const prompt = require('prompt-sync')();
var custofabrica = parseFloat(prompt('Digite o custo de fábrica do carro : '));

const distribuidora = 0.28;
const impostos = 0.45;

var calc1 = custofabrica * distribuidora;
var calc2 = custofabrica * impostos;
var custofinal = custofabrica + calc1 + calc2;
console.log('O custo final do carro é: R$'+custofinal+',00')

