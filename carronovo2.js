//5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
// distribuidor e dos impostos (aplicados ao custo de fábrica). 
// Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor e o imposto, 
//e calcular e escrever o custo final ao consumidor


const prompt = require('prompt-sync')();

var custofabrica = parseFloat(prompt('Digite o custo de fábrica do carro : '));
var distribuidora = parseFloat(prompt('Digite a porcentagem da distribuidora : '));
var impostos = parseFloat(prompt('Digite o percentual de impostos : '));

var calc1 = (distribuidora/100) * custofabrica;
var calc2 = (impostos/100) * custofabrica;
var custofinal = custofabrica + calc1 + calc2;
console.log('O custo final do carro é: R$'+custofinal+',00')

