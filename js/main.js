console.log('ok js');

// array studenti
const students = [
    {
        id : 213,
        name : 'Marco della Rovere',
        grades : 78
    },
    {
        id : 110,
        name : 'Paola Cortellessa',
        grades : 96
    },
    {
        id : 250,
        name : 'Andrea Mantegna',
        grades : 48
    },
    {
        id : 145,
        name : 'Gaia Borromini',
        grades : 74
    },
    {
        id : 196,
        name : 'Luigi Grimaldello',
        grades : 68
    },
    {
        id : 102,
        name : 'Piero della Francesca',
        grades : 50
    },
    {
        id : 120,
        name : 'Francesca da Polenta',
        grades : 84
    },
    

]

console.log(students);

//filtro gli studenti che hanno un voto maggiore/uguale a 70
const studentGrades = students.filter((student) => student.grades >= 70);
console.log(studentGrades);

//filtro gli studenti che hanno un voto maggiore/uguale a 70 e un id maggiore/uguale 120
const studentGradesId = students.filter((student) => student.grades >= 70 && student.id >= 120);
console.log(studentGradesId);

//creo un nuovo array contenete i moni degli studenti in maiuscolo
const studentUpperNames = students.map((student) => student.name.toUpperCase());
console.log(studentUpperNames);
