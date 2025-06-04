/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function saluto(string) {
   
    const date = new Date();
    let hour = date.getHours();
    
    if (hour > 8 && hour < 13) {
        return `Buongiorno ${string}`;
    }
    else if (hour >= 13 && hour < 17) {
        return `Buon pomeriggio ${string}`;
    }
    else {
        return `Buonasera ${string}`;
    }
    
}

// Invoca la funzione qui e stampa il risultato in console

const saluti = saluto(name);
console.log(saluti);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.