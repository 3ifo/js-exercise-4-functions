/* 
1. Dare la possibilità di inserire due parole.
Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due. 
function lunghezzaParole(parola1, parola2) {
  let lunghezzaParola1 = parola1.length;
  let lunghezzaParola2 = parola2.length;

  if (lunghezzaParola1 === lunghezzaParola2) {
    console.log("Le parole hanno la stessa lunghezza");
  } else if (lunghezzaParola1 > lunghezzaParola2) {
    console.log(parola1);
  } else {
    console.log(parola2);
  }
} 

parola1 = prompt("Scrivi una parola");
parola2 = prompt("Scrivi la seconda parola");

lunghezzaParole(parola1, parola2); */

/* 2. Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC). Quindi, chiedere all’utente quale parola vuole girare.
BONUS: se la parola scelta dall’utente è un palindromo, avvisalo */

/* male male */

/*3. Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro 
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3] */

function faiUnArray(array1, array2) {
  let arrayTotale = array1 + array2;
  return arrayTotale;
  console.log(arrayTotale);
}
