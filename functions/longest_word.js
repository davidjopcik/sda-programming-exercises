// Napište funkci, která jako parametr přijme řetězec a najde nejdelší slovo v řetězci.
// Vstup: "Web Development Tutorial", Výstup: "Development"


function findLongestString(text) {
    let result = text.split(" ")
    result.sort(function(a,b) {return b.length - a.length})
    console.log(result);
}

findLongestString("Web Development Tutorial")
findLongestString("Web Development Thisislongerword")
