// Criar um novo arquivo que implemente a solução para o problema: dado um array de valores [9, 4, 5, 10, 2, 90, 8, 6, 33] 
//exiba quais são os maiores que 20. Crie um commit separado para este arquivo

const { number } = require("yargs");

const arrayNum = [9, 4, 5, 10, 54 , 88 , 2, 90, 8, 6, 33, 87, 24, 45, 7633];

const maioresde20 = arrayNum.filter((number) => number > 20);
console.log("Os números maiores de vinte são:", maioresde20)

const menoresde20 = arrayNum.filter((number) => number < 20);

console.log("Os números menores do que vinte são:" ,menoresde20)
