//3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
//Calcular e escrever o valor do novo salário.

const prompt = require('prompt-sync')();
var salario = Number(prompt('Qual o salário do funcionário: '));
var opcao = Number(prompt('Vai ser um acréscimo ou decréscimo digite [1] para acréscimo e [2] para decréscimo : '));
var salario_novo = Number(prompt('Digite o percentual de reajuste: '));
var calc = (salario_novo * salario)/100 ;
if (opcao == 1){
    console.log('O seu salário novo é: ',salario+calc)
}if(opcao == 2){
    console.log('O seu salário novo é: ',salario-calc)
}
