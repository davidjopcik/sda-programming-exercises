// Napište pomocí cyklu for funkci min, která pro zadané pole čísel vypíše jeho nejmenší prvek
let test = Number.MAX_SAFE_INTEGER
function min(array) {
    for(i = 0; i <= array.length; i++){
            if(test > array[i]){
                test = array[i]
        }
    }
    console.log("Toto je min: " + test);
}
min([1, 4, 6, 67, 8, 4, 3, 9, 24, , 4, 2])