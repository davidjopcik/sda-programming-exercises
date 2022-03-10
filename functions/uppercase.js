// Napište funkci, která přijme jako parametr řetězec a převede první písmeno každého slova řetězce na velká písmena.
// Vstup: "the quick brown fox", Výstup: "The Quick Brown Fox"

function toUpperCase(text) {
    let a = text.split(" ")
    let result
    /* for (i = 0; i < a.length; i++) { 
        result += a[i].charAt(0).toUpperCase() + a[i].slice(1)+ " "
    } */

    result = a.map(function(x)  {
        return x.charAt(0).toUpperCase() + x.slice(1)}).join(" ")
    console.log(result);
    }
toUpperCase("the quick brown fox")