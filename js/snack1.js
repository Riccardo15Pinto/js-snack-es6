//check console log
console.log('ok js');
//array degli invitati
const vipsList = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];
//check vips
console.log(vipsList)
// creo un nuomo arrray contenente degli oggetti 
const vipsTable = vipsList.map((element, index) => {

    return {
        'nome del tavolo' : 'Tavolo Vip',
        'nome del ospite' : element,
        'numero posto' : index + 1
    }
    
});

//controllo vipstable
console.log(vipsTable);


