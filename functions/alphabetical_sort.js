// Napište funkci, která vrátí předaný řetězec s písmeny v abecedním pořadí.
// Vstup: "webmaster", Výstup: "abeemrstw"


let sortString = function(text){
    let a = text.split("").sort().join("")
    console.log(a);
}
sortString("webmaster")
