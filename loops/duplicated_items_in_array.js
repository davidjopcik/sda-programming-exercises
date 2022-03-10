// Napiště funkci findDup(), která pro zadané pole vrací všechny prvky, které se v daném poli opakují více než jednou.
let newArray = []
function findDup(array){
    for (i = 0; i < array.length; i++) {
        for(j = i; j < array.length; j++){
            counter = 1
            if(array[i] === array[j + 1]){
                if(!newArray.includes(array[i])){
                    newArray.push(array[i])
                }
            }
        }
    }
    console.log(newArray);
}
findDup([1, 4, 8, 4, "Peter", "Ondrej", "Jozef", 9, 8, "Jozef", 8, 8, 8])