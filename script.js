//---------------------------------//
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML

console.log("JS OK");

//---------------------------------//
// CREO UNA COSTANTE FIRSTNAME A CUI DARA' VALORE IL PASSEGGERO

const km = parseInt(prompt("Quanti Km farai in questo viaggio?"));

console.log(km);

//---------------------------------//
// CREO UNA COSTANTE ETA' A CUI DARA' VALORE IL PASSEGGERO

let age = parseInt(prompt("Quanti anni hai?"));

console.log(age);

//---------------------------------//
// CREO UNA COSTANTE MONEY CON UN VALORE PREDEFINITO

const money = 0.21;

console.log(money);

//---------------------------------//
// CREO UNA COSTANTE RESULT CHE MOLTIPLICHERA' SOLDI * NUMERO DI KILOMETRI

let result = money * km;

result = result.toFixed(2);

console.log(result);


//---------------------------------//
// CREO UNA COSTANTE MINDISCOUNT CHE ANDRA' A MODIFICARE IL RISULTATO PER 20%

const minDiscount = result * 20 / 100;

//---------------------------------//
// CREO UNA COSTANTE MAXDISCOUNT CHE ANDRA' A MODIFICARE IL RISULTATO PER 40%

const maxDiscount = result * 40 / 100;

//---------------------------------//
// SE L'ETA' E' MINORE O UGUALE DI 18 SI PRENDE IL RISULTATO MENO IL MINDISCOUNT

if (age <= 18) {

    result = result.toFixed(2) - minDiscount;

    console.log(result);
}

//---------------------------------//
// SE L'ETA' E' MAGGIORE O UGUALE DI 65 SI PRENDE IL RISULTATO MENO IL MAXDISCOUNT

else if (age >= 65) {
    result = result.toFixed(2) - maxDiscount;

    console.log(result);
}





