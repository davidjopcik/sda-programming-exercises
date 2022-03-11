// Napište funkci, která použije algoritmus Bubble Sort pro seřazení prvku v polu.
// Poznámka:  Bubble sort, někdy označovaný jako sinking sort, je jednoduchý třídicí algoritmus, který funguje tak, 
// že opakovaně prochází seznam, který má být seřazen, porovnává každou dvojici sousedních položek a vyměňuje je, 
//pokud jsou v nesprávném pořadí. Více: https://www.algoritmy.net/article/3/Bubble-sort
// Ukázka pole : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213].
// Očekávaný výstup : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1].




let arrayOne = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
let arrayTwo = [2,100,5,3,8,9,1,57,2,98,4]
console.log(arrayOne);
function bubleSort(array){
    let end = false
    while (end !== true) {
        let counter = 0
        for(i = 0; i < array.length -1; i++){
            if (array[i] > array[i+1]) {
                array.push(array[i])
            //console.log(array);
            array.splice(i, 1, array[i+1])
            //console.log(array);
            array.splice(i+1, 1, array[array.length-1])
            //console.log(array);
            array.pop()
        //console.log("Cyklus: " + i + "= ");
        //console.log(array);
            }else{
                counter += 1
        //console.log("Na pozícii: " + i + " a" + (i+1) + " nedošlo k výmene");
        //console.log(array);
        //console.log("-------");
        //console.log(counter);
        if(counter === array.length-1){
            end = true
        }
        }
        }
    }
    console.log(array);       
}
bubleSort(arrayOne)
