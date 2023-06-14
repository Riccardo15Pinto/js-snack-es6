//check
console.log('ok js snack 4');

//recupero elementi dal DOM
const resultElement = document.getElementById('snack-4');

//creo una funzione che generi un numero da 1 a 50
function getRandomLownumbers(){
    const lowNumber = Math.floor(Math.random() * 50) + 1;
    return lowNumber;
}

//creo una funzione che generi un numero da 1 a 100
function getRandomHighnumbers(){
    const highNumber = Math.floor(Math.random() * 100) + 1;
    return highNumber;
}

//creo un array di oggetti
const players = [
    {
        nome : 'Francesco Totti',
        'punti fatti' : getRandomHighnumbers(),
        'falli subiti' : getRandomLownumbers()      
    },
    {
        nome : 'Ricardo Kakà',
        'punti fatti' : getRandomHighnumbers(),
        'falli subiti' : getRandomLownumbers()      
    },
    {
        nome : 'Ronaldo',
        'punti fatti' : getRandomHighnumbers(),
        'falli subiti' : getRandomLownumbers()      
    },
    {
        nome : 'Maradona',
        'punti fatti' : getRandomHighnumbers(),
        'falli subiti' : getRandomLownumbers()      
    },
    {
        nome : 'Pelé',
        'punti fatti' : getRandomHighnumbers(),
        'falli subiti' : getRandomLownumbers()      
    },
    {
        nome : 'Aldo Baglio',
        'punti fatti' : getRandomHighnumbers(),
        'falli subiti' : getRandomLownumbers()      
    },
    {
        nome : 'Giacomo Poretti',
        'punti fatti' : getRandomHighnumbers(),
        'falli subiti' : getRandomLownumbers()      
    },
]

//controllo l'array
console.table(players);

//creo un nuovo array
const newPlayers = players.map((player) => ({nome :player.nome , 'falli subiti': player["falli subiti"]}));

//controllo
console.table(newPlayers);

//creo una variabile d'appoggio
let element = '';

//monto in contenuto degli oggetti 
for(let player of newPlayers){
element += `
<div>
    <p>Nome del Giocatore: ${player.nome}</p>
    <p>Falli Subiti: ${player["falli subiti"]}</p>
</div>
`
}

// stampo in pagina
resultElement.innerHTML = element;