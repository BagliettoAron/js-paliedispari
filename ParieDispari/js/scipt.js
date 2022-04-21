// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiedere all'utente se preferisce pari o dispari
userEvenOrOdd = prompt("scrivi pari se preferisci pari, dispari se preferisci dispari");
console.log("l'utente sceglie :", userEvenOrOdd);

// chiedere all'utente di inserire un numero da uno a cinque
userNumber = parseInt(prompt("scrivi un numero da 1 a 5"));
console.log("numero fornito dall'utente", userNumber);

// imposto i parametri della costante che andranno inseriti nella funzione
const randomPcNumber = generatePcNumber(1, 5);
console.log("numero random del computer", randomPcNumber);

// sommo il numero dell'utente e il numero del computer
sumNumbers = Number(randomPcNumber) + Number(userNumber);
console.log("somma del numero dell'utente e del numero del computer", sumNumbers); 

// imposto i parametri della costante che andranno inseriti nella funzione
let numberEvenOrOdd = evenOrOdd(sumNumbers)
console.log("la somma dei numeri è :", numberEvenOrOdd);

if (userEvenOrOdd === numberEvenOrOdd) {
    alert ("Hai vinto")
} else {
    alert ("Ritenta");
}

function generatePcNumber(min, max) {
    let randNumber
    randNumber = Math.floor(Math.random() * (max - min + 1) ) + min; 

    return randNumber;
}

function evenOrOdd (calcolatedNumber) {
    let sumResult = "dispari";

    if (sumNumbers % 2 === 0) {
        sumResult = "pari";
    } 

    return sumResult;
}

