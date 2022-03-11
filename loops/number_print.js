// Implementujte dvě funkce.
// Každá bude přijímat parametry min, max, descending.
// Min, max jsou čísla a descending pravdivostní hodnota.
// Obě funkce vypíšou všechna čísla v rozmezí čísel min a max.
// Pokud parametr descending je roven true, pak tato čísla budou vypsána v sestupném pořadí.
// První funkce vypíše čísla pomocí cyklu for a druhá pomocí cyklu while.

let string = "" 
let descending = false
function minMax(min, max, descending) {
    for(i = min; i <= max; i++) {
        string += i + " "
    }
    if(descending === true) {
        console.log(string.split(" ").reverse().join(" ").trim());
        return
    
    }
    
    /* while (min <= max) {
        string += min +" "
        min++
    }
    if(descending === true) {
        console.log(string.split(" ").reverse().join(" ").trim());
        return
    } */
    console.log(string);
}
minMax(10, 18, false) 

// Šlo by to i takto, možná bych to spíš ale udělal tak, že na základě té podmínky se spustí cyklus s jinými parametry a
// nemusel bych potom dělat tu potenciálně náročnou operaci s řetězcem.
// Podmínku ulze zapsat pouze takto: if(descending === true) {

// Např.
// if(descending) {
//     for(i = min; i <= max; i++) {
//         string += i + " "
//     }
// } else {
//     for(i = max; i >= min; i--) {
//         string += i + " "
//     }
// }

console.log(string);