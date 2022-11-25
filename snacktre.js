//Calcola la somma dei primi 10 numeri di un array.

const number=[4, 6 ,7 , 9 , 12 ,2 ,1 ,13 ,42 ,7]
let somma = 0;

for (let i = 0; i < 10; i++){
    somma = somma + number [i];
}

console.log(somma);