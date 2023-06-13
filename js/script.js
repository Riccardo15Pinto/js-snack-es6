//check console log
console.log('ok js');
//array degli invitati
const Vips = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];
//check vips
console.log(Vips)
// creo un nuomo arrray contenente degli oggetti 
const vipsTable = Vips.map((element, index) => {

    return {
        'nome del tavolo' : 'Tavolo Vip',
        'nome del ospite' : element,
        'numero posto' : index + 1
    }
    
});

//controllo vipstable
console.log(vipsTable);


