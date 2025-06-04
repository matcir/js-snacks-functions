/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function vowelCheck(string) {
    let myVowels = [];
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i=0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            myVowels.push(string[i]);
        }
    }
    
    return myVowels; 
}

// Invoca la funzione qui e stampa il risultato in console

const result = vowelCheck(word);
console.log(result.length, result);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)