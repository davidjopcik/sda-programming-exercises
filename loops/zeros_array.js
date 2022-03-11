// Implementujte funkci, která vytvoří a vrátí pole o velikosti n obsahující, kde každým prvkem je číslo 0 
// a n je číselný parametr této funkce.

let array = []
function arrayZero(n){
    let m = 0
    while (m < n) {
        array.push(0)
        m++
    }
    console.log(array);
}
arrayZero(10)