//6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
//mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. 
//Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, 
//o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.
const prompt = require("prompt-sync")();

var venda = Number(prompt("Quantos carros foram vendidos ?"));
const salario_fixo = 1800;
var valor = Number(prompt("Qual o valor total das vendas ?"));
var comissao = valor * 0.05;
const venda_fixa = venda * 150;
var salario_final = salario_fixo + comissao + venda_fixa;
console.log("O salário final do vendedor é de R$" + salario_final);