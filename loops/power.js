// Napište pomocí cyklu for funkci numPower(num, n) pro vrácení mocniny čísla pro zadanou exponenciální hodnotu (vratí n-tou mocninu čísla num)
// numPower(2,3) = 8, numPower(4,3) = 64

let result = 1
function numPower(num, n) {
    for(i = 0; i < n; i++) {
        result *= num
    }
    console.log(result);
}
numPower(2,4)