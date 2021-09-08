//Crea un array di 10 oggetti che rappresentano una zucchina, indicando
//per ognuna varietà, peso e lunghezza.
var zucchine = [
    {
        "nome" : "Varietà_1",
        "lunghezza" : 18,
        "peso" : 150
    },

    {
        "nome" : "Varietà_2",
        "lunghezza" : 19,
        "peso" : 140
    },

    {
        "nome" : "Varietà_3",
        "lunghezza" : 17,
        "peso" : 130
    },

    {
        "nome" : "Varietà_4",
        "lunghezza" : 21,
        "peso" : 160
    },

    {
        "nome" : "Varietà_5",
        "lunghezza" : 16,
        "peso" : 180
    },

    {
        "nome" : "Varietà_6",
        "lunghezza" : 15,
        "peso" : 140
    },

    {
        "nome" : "Varietà_7",
        "lunghezza" : 19,
        "peso" : 190
    },

    {
        "nome" : "Varietà_8",
        "lunghezza" : 16,
        "peso" : 150
    },

    {
        "nome" : "Varietà_9",
        "lunghezza" : 14,
        "peso" : 120
    },

    {
        "nome" : "Varietà_10",
        "lunghezza" : 17,
        "peso" : 160
    }


];
//Calcola quanto pesano tutte le zucchine.

var somma = 0;

for(var i = 0; i < zucchine.length; i++) {
    somma += zucchine[i]["peso"];
    console.log( zucchine[i]["peso"] );
}

console.log(somma);



