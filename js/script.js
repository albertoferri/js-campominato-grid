// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



// assegno variabile al bottone
const createGridElement = document.getElementById("createGrid-Btn");

// inposto che al click fa partire la funzione "createGrid"
createGridElement.addEventListener("click", createGrid);

// stampo in pagina il titolo
document.getElementById("title").innerText = "CAMPO MINATO"