// Napište funkci factorial(n), která vypíše faktoriál čísla n
let arrayOne = []
let result = 1
function factorial(n) {
    for (i = n; i >= 1; i--) {
        arrayOne.push(i)
    }
    console.log(arrayOne);

    for(j = 0; j < arrayOne.length; j++) {
        result *= arrayOne[j]
    }
    console.log(result);
}
factorial(5)