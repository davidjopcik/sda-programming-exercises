// Napište pomocí cyklu for funkci max, která pro zadané pole čísel vypíše jeho největší prvek

let test = Number.MIN_SAFE_INTEGER
function max(array) {
    for(i = 0; i <= array.length; i++){
            if(test < array[i]){
                test = array[i]
        }
    }
    console.log("Toto je max: " + test);
}
max([1, 4, 6,67, 8, 4, 3, 9, 24, 4, 2])