//Scrivi una funzione che fonda due array (aventi lo stesso numero di
//elementi) prendendo alternativamente gli elementi da uno e dall’altro
//es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

//***FUNZIONE LOCALE***/
function mixArray(arr1, arr2) {
    let arrComplete = [];

    for(let i = 0; i < arr2.length; i++){
        arrComplete.push(arr1[i]);
        arrComplete.push(arr2[i]);
    }

    return arrComplete;
}

//***PRINCIPALE***/

const arr1 = ["a", "b", "c"];
const arr2 = [1, 2, 3];

console.log(mixArray(arr1, arr2));