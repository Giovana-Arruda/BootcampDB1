//Criar um arquivo que dado o array de valores [2, 4, 3, 1, 6, 7, 9], retorne quais são pares. Fazer em JavaScript

const arrayNum = [2, 4, 3, 1, 6, 7, 9];

arrayNum.forEach(num => {
    if (num % 2 === 0) {
        console.log("Os números pares do array são: ",num);
    }
});

