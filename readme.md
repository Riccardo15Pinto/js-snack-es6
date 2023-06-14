# SNACK 1
    Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip. Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
    [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
    Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato.
    Generiamo e stampiamo in console la lista per i segnaposto.

---
---

## logica

- creo un array con dentro gli invitati
- creo una array vuoto dove andro a inserire all'interno degli oggetti 
    - nome opsiti : nome dell'array invitati
    - numero posto : indice degli array degli invitati
    - nome del tavolo : 'tavolo vip'
    return
- controllo in console

# SNACK 2
    Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
    Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni
    - 1. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
    - 2.Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
    - 3.  dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);

---
---

## logica

- creo un array di studenti contenente degli oggetti
   - id
   - nome studente
   - voto
- filtro gli studenti che hanno un voto maggiore/uguale a 70
- filtro gli studenti che hanno un voto maggiore/uguale a 70 e un id maggiore/uguale 120
- creo un nuovo array contenete i moni degli studenti in maiuscolo

# SNACK 3
    Creare un array di oggetti:
    Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e weight.
    Stampare in console la bici con peso minore utilizzando il destructuring
---
---
## logica
- recupero elemento dal DOM
- creo un array contenete un lista di oggetti contenente:

    - nome dell'oggetto 
    - peso dell'oggetto

- creo una variabile che stabilisca quale sia l'oggetto con valore minore contenuto nell' Array
- stampo il risultato nel DOM 

# SNACK 4
    Creare un array di oggetti di squadre di calcio.
    Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
    nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
    Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

---
---
## logica

- recupero elemento dal DOM
- creo una funzione che generi numeri random
- creo un Array di oggetti conteneti:

    - nome
    - punti fatti (funzione numeri random)
    - falli subiti (funzione numeri random)

- genero un nuovo array contenente due dei valori indicati invece che tre
- stampo in pagina