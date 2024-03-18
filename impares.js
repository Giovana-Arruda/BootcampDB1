const arrayNum = [2, 4, 3, 1, 6, 7, 9, 8, 10, 0];

arrayNum.forEach(num => {
    if (num % 2 !== 0) {
        console.log("Números ímpares são: ", num);
    }
});