// Criar um novo arquivo que implemente a solução para o problema: dado um array de valores [9, 4, 5, 10, 2, 90, 8, 6, 33] 
//exiba quais são os maiores que 20. Crie um commit separado para este arquivo

const arrayNum = [9, 4, 5, 10, 2, 90, 8, 6, 33];


arrayNum.forEach(num => {
    if (num > 20) {
    console.log(num)
}});