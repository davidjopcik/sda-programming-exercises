// Napište funkci, která jako parametr přijme číslo a ověří, zda je číslo prvočíslo, nebo ne.
// Poznámka : Prvočíslo (nebo také prvočíslo) je přirozené číslo větší než 1, které nemá jiné kladné dělitele než 1 a samo sebe.
function primeNumber(n) {
    for(i = 2; i < n; i++){
        if(n % i === 0  ) {
            console.log(n + " nie je prvočíslo");
            return
        }
    }
    console.log(n + " je prvočíslo");
    
}
primeNumber(5)
primeNumber(8)
primeNumber(31)
primeNumber(15)
primeNumber(121)