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

