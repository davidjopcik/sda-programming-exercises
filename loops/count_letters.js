// Napište funkci pro zjištění a výpis počtu všech písmen ve slově.
// Vstup: "aha", 
// Výstup: "Písmeno A nalezeno 2x. Písmeno H nalezeno 1x."

let counter
let newArray = []
function findLetter(text) {
    let arrayOne = text.split("")
    for(i = 0; i < arrayOne.length; i++) {
        counter = 1
        for(j = i + 1; j < arrayOne.length; j++) {
            if(arrayOne[i] === arrayOne[j]){
                counter += 1
            }
        }
        if(!newArray.includes(arrayOne[i])){
            newArray.push(arrayOne[i])
            console.log("Písmeno " + arrayOne[i].toUpperCase() + " nalezeno " + counter + " krát.");
        } 
    }
}
findLetter("ahaahaha")



