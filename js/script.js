// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



// assegno variabile al bottone
const createGridElement = document.getElementById("createGrid-Btn");

// inposto che al click fa partire la funzione "createGrid"
createGridElement.addEventListener("click", createGrid);


// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
function createGrid() {
    const gridElement = document.getElementById("grid");
    // per evitare che generi ogni volta una griglia, resetto ogni volta 
    gridElement.innerHTML = '';
    
    for (let i = 0; i < 100; i++) {
        const squareElement = document.createElement("div");
        squareElement.classList.add("square");
        squareElement.innerHTML = i + 1; 
        gridElement.append(squareElement);
        
        // cambio colore al click
        squareElement.addEventListener("click", function(){
            this.classList.toggle("active");
            console.log("HAI SELEZIONATO LA CELLA: " + this.innerText)
        });
    }

    // stampo in pagina il titolo e sfondo
    document.getElementById("title").innerText = "CAMPO MINATO"
    // document.body.style.backgroundColor = "lightblue";
    // document.body.style.backgroundColor = "linear-gradient(to top, #6bf869, #fff066)";
}