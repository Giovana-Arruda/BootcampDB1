const array = [2,8,7,5,4, 2, 10]

const multArray = array.reduce((acc, value) =>
{ return acc * value;
}, 1);

console.log(multArray)