// Napiště funkci palindrome, která pro zadané slovo vrátí true nebo false na základě toho, jestli dané slovo je palindromem.
// Vstup: "ahoj", Výstup: false
// Vstup: "aha", Výstup: true

let arrayOne
let ispalindrome
function palindrome(text) {
    arrayOne = text.split("").reverse().join("")
    if(arrayOne === text){
        ispalindrome = true
    }else{
        ispalindrome = false
    }
    console.log(ispalindrome);
}
palindrome("aha")
palindrome("ahoj")
palindrome("amma")
palindrome("Peter")

// Zkusil bys vymyslet řešení bez použítí funkcí split, reverse a join? Pomocí vlastního cyklu?
// Celou tuto funkci bys mohl napsat pouze jako console.log(text = text.split("").reverse().join(""));