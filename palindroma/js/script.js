// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo all'utente di inserire una parola
let userWord = prompt("dimmi una parola")

// divido in lettere la parola fornita precedentemente
let splitUserWord = userWord.split("");
console.log("parola dell'utente scomposta in lettere", splitUserWord);

// inverto la posizione delle lettere divise in precedenza
let splitUserWordReverse = splitUserWord.reverse();
console.log("lettere della parola fornita dall'utente, ma al contrario", splitUserWordReverse);

// riaccorpo le lettere ricavate nel passaggio precedente
let userWordReverse = splitUserWordReverse.join("");
console.log(userWordReverse);

// creo la variabile con valori userWord e userWordReverse che andranno nella funzione
if (isThisWordPalindromes(userWord, userWordReverse)){
    alert ("la parola è palindroma");
} else {
    alert ("la parola non è palindroma");
}


// creo la funzione che metta in comparazione le due parole, e se sono identiche restituisco un valore booleano
/**
 * Description
 * @param {String} -> parola fornita dall'utente
 * @param {String} -> parola fornita dall'utente, ma al contrario
 * @returns {Boolean} -> vaore booleano che innescherà gli alert
 */

function isThisWordPalindromes(firstWord, secondWord) {
    let comparison = false;
    
    if (firstWord === secondWord) {
        comparison = true;
    } 
    
    return comparison;
    
}










