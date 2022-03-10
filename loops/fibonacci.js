// Napište funkci fibonacci(n), která vypíše Fibonacciho řadu pro zadaný rozsah n pomocí cyklu while
let result = 1
let array = []
function fibonacci(n) {
    for (i = 0; i < n; i++) {
        array.push(i)
    }
    for(j = 2; j < array.length; j++) {
        result += array[j - 2] 
        console.log(result);
    }


    /* let a = 1
    let b = 1
    while (b < n) {
        b = b + a
        

    console.log("a = " + a);
    console.log("b = " + b);
    console.log("_______");

    }
    console.log(b);*/
    console.log(array); 
}

fibonacci(20)