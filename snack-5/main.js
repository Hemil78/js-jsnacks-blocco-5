//Scrivi una funzione che accetti tre argomenti:
//un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

//1. definisco un'array di elementi
var arrayDefoult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numMin = parseInt(prompt("Inserisci un numero minimo"));
var numMax = parseInt(prompt("Inserisci un numero massimo"));


//2. definisco una FUNZIONE LOCALE
function argThree(arr, numMin, numMax) {
    let newArray = [];


    for(let i = 0; i < arr.length; i++) {
         if(i >= numMin - 1 && i <= numMax - 1){
            newArray.push(arr[i]);
         }
    }
    
    
    
    return newArray;
}


var array = argThree(arrayDefoult, numMin, numMax);
console.log(array);