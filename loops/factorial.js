// Napište funkci factorial(n), která vypíše faktoriál čísla n
let arrayOne = []
let result = 1
function factorial(n) {
    for (i = n; i >= 1; i--) {
        arrayOne.push(i)
    }
    console.log("Array: " + arrayOne);

    for(j = 0; j < arrayOne.length; j++) {
        result *= arrayOne[j]
    }
    console.log("Faktoriál: " + result);
}
factorial(5)

// Nešel by použít jen jeden cyklus? To pole si podle mě vytvářet nemusíš.