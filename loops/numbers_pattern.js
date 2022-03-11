// Napište funkce printPattern() slouží k vypsání následujícího vzoru pro daný rozsah pomocí vnořené smyčky for.
// Vstup: 8
// Výstup:
/* 
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
1 2 3 4 5 6 
1 2 3 4 5 6 7 
1 2 3 4 5 6 7 8 
*/

let a = ""
function printPattern(n) {
    for (i = 1; i <= n; i++) {
        a += " " + i 
        console.log(a);
    }
}
printPattern(8)

// Pěkné řešení.