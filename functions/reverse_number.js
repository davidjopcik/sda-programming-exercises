// Napište funkci, která obrátí číslo, které dostane zadané parametrem.
// Vstup: 3245, Výstup: 5423

function numberBack(number) {
    let a = number.toString().split("").reverse().join("")
    console.log(a);
}
numberBack(12856)