// Implementujte dvě funkce.
// Každá bude přijímat parametry min, max, descending.
// Min, max jsou čísla a descending pravdivostní hodnota.
// Obě funkce vytvoří a vrátí pole obsahující všechna čísla v rozmezí čísel min a max.
// Pokud parametr descending je roven true, pak pole bude obsahovat čísla v sestupném pořadí.
// První funkce vypíše čísla pomocí cyklu for a druhá pomocí cyklu while.

let arrayOne = []
let descending = false
function minMax(min, max, descending) {
    /* for(i = min; i <= max; i++) {
        arrayOne.push(i)
    }
    if(descending === true) {
        console.log(arrayOne.reverse());
        return
    }*/
    
    while (min <= max) {
        arrayOne.push(min)
        min++
    }
    if(descending === true) {
        console.log(arrayOne.reverse());
        return
    }
    console.log(arrayOne);
}
minMax(10,18, false) 



