//Crea 10 oggetti che rappresentano una zucchina.

//Infine stampa separatamente quanto pesano i due gruppi di zucchine.

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

//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
var zucchineCorte = [];
var zucchineLunghe = [];

var pesoZucchineCorte = 0;
var pesoZucchineLunghe = 0;

for(var i = 0; i < zucchine.length; i++) {
    if(zucchine[i]["lunghezza"] <= 17) {
        zucchineCorte.push(zucchine[i]);
        pesoZucchineCorte += zucchine[i]["peso"];
    } else if(zucchine[i]["lunghezza"] > 17){
        zucchineLunghe.push(zucchine[i]);
        pesoZucchineLunghe += zucchine[i]["peso"];
    }

}
console.log(zucchineCorte);
console.log(`peso totale è: ${pesoZucchineCorte}gr`);

console.log(zucchineLunghe);
console.log(`peso totale è: ${pesoZucchineLunghe}gr`);