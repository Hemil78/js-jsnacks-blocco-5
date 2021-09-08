//Scrivi una funzione che accetti una stringa come argomento e la ritorni
//girata (es. Ciao -> oaiC)
var newString = "";

function reverseString(str) {
   
 
    
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }

    return newString; 
}
 
reverseString('ciao');
console.log(newString);