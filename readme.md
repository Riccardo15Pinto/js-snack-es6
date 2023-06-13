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