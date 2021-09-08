//Scrivi una funzione che accetti una stringa come argomento e la ritorni
//girata (es. Ciao -> oaiC)


function reverseString(str) {
    
    var newString = "";
    
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }

    return newString; 
}
 
var newString = reverseString('ciao');
console.log(newString);