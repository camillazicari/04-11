/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
i principali datatype in JavaScript sono 5:
-le stringhe, ovvero i datatype che identificano le variabili di carattere testuale. Perchè il valore di una variabile possa essere definito di tipo stringa, esso deve essere racchiuso all'interno degli apici. Ad esempio: let(variabile) nome(nome del definitore) = 'Camilla' (valore di tipo stringa).
-i numeri, ovvero i datatype che identificano le variabili di carattere numero. Perchè il valore di una variabile possa essere definito di tipo numerico, esso NON deve essere racchiuso all'interno degli apici. Ad esempio: let(variabile) numero(nome del definitore) = 5 (valore di tipo numerico).
-i booleani, ovvero i datatype che identificano le variabili che ammettono solo due tipi di valori: true o false. Anche in questo caso il valore non deve essere racchiuso negli apici. Ad esempio: let(variabile) veroOFalso(nome del definitore) = true (valore di tipo booleano). 
-null, ovvero il datatype che identifica l'assenza intenzionale di un valore. Ad esempio: let(variabile) numero(nome del definitore) = null (valore assente). 
-undefined, ovvero il datatype che identifica la mancanza di un valore assegnato o di una definizione della variabile. Questo può succedere quando, all'interno di una funzione, utilizziamo delle variabili che non sono state definite precedenemente.*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let myName = 'Camilla'
console.log(myName) */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let numero1 = 12
let numero2 = 20
console.log(numero1+numero2) */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let x = 12
console.log(x) */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const myName = 'Zicari'
let myName = 'Camilla'
console.log(myName) */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let numero3 = 4
console.log(numero3-x) */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let name1 = "john"
let name2 = "John"

console.log(name1===name2)

if (name2 = "john")
console.log(name1===name2) */