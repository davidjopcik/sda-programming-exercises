// Napište funkci pro výpočet počtu pracovních dnů při pevně daném rozpočtu.
// Funkce bude přijímat rozpočet zaměstnavatele a hodinovou sazbu pracovníka
// a vrátí maximální počet dní po které si může zaměstnavatel pracovníka dovolit, když počítáme s 8hodinovou pracovní dobou.
// Vstup: 20000, 89, Výstup: 28

function budget(budget, perhour){
    return Math.floor(budget/(perhour*8)) 
}
console.log(budget(20000, 89));