/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function initialsCheck(array, letter) {
    const namesWithA = [];
    for (let i=0; i < array.length; i++) {
        
        if (array[i].toLowerCase().charAt(0) === letter) {
            namesWithA.push(array[i]);
        }
    }
    return namesWithA;
}

// Invoca la funzione qui e stampa il risultato in console

const aNamesArray = initialsCheck(names, "a");
console.log(aNamesArray);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]