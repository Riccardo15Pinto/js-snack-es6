// check 
console.log('ok js snack 3')

//recupero elemento dal DOM
const textElement = document.getElementById('snack-3');

// creo un array di oggetti
const bicycles = [
    {
        name : 'Motorella',
        weight : 5
    },
    {
        name : 'Grazziella',
        weight : 7
    },
    {
        name : 'Veloce',
        weight : 1
    },
    {
        name : 'BMX',
        weight : 14
    },
    {
        name : 'Pedalis',
        weight : 6
    },
    {
        name : 'Inpennus',
        weight : 9
    },
    {
        name : 'DMatteus',
        weight : 11
    },
    {
        name : 'Gina',
        weight : 4
    },
    {
        name : 'Velocella',
        weight : 15
    },
]

// stampo l' array in console
console.table(bicycles)

// creo una variabile che stabilisca negli oggetti contenuti nell Array sia il più piccolo
const bicycleLowWeight = Math.min(...bicycles.map(bike => bike.weight));

//stampo in console il risultato
console.log('La bicicletta più leggera pesa: ' + bicycleLowWeight + ' kg');

//stampo in pagina
textElement.innerText = 'La bicicletta più leggera pesa: ' + bicycleLowWeight + ' kg';