// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


//PRIMO METODO

const kmPasseggero = parseInt(prompt("Quanti km vuoi percorrere?"));
const eta = parseInt(prompt("quanti anni hai?"));

const prezzoBiglietto = (kmPasseggero * 0.21);

if(eta < 18 ) {
    console.log((prezzoBiglietto * 0.8).toFixed(2));
} else if (eta > 65){
    console.log((prezzoBiglietto * 0.6).toFixed(2));
} else {
    console.log(prezzoBiglietto.toFixed(2));
} 




// _________________________________________________________________________________________________________

//SECONDO METODO

// const kmPasseggero = parseInt(prompt("Quanti km vuoi percorrere?"));
// const eta = parseInt(prompt("quanti anni hai?"));

// const prezzoBiglietto = kmPasseggero * 0.21;

// let sconto;

// let prezzoFinale;

// if (eta < 18) {
//     sconto = prezzoBiglietto * 0.2;
// } else if (eta > 65) {
//     sconto = prezzoBiglietto * 0.4;
// } else {
//     sconto = 0;
// }

// prezzoFinale = prezzoBiglietto - sconto;
// console.log(prezzoFinale.toFixed(2));


// ________________________________________________________________________________________________________

//TERZO METODO: il più dettagliato

// const kmPasseggero = parseInt(prompt("Quanti km vuoi percorrere?"));
// const eta = parseInt(prompt("quanti anni hai?"));

// const prezzoBiglietto = kmPasseggero * 0.21;

// let sconto;

// let prezzoFinale;

// if (eta < 18) {
//     sconto = prezzoBiglietto * 0.2;
//     console.log("Con " + kmPasseggero + " km");
//     console.log("Il prezzo intero del biglietto è:", prezzoBiglietto.toFixed(2), "€");
//     console.log("Lo sconto applicato è:", sconto.toFixed(2), "€");
// } else if (eta > 65) {
//     sconto = prezzoBiglietto * 0.4;
//     console.log("Con " + kmPasseggero + " km");
//     console.log("Il prezzo del intero biglietto è:", prezzoBiglietto.toFixed(2), "€");
//     console.log("Lo sconto applicato è:", sconto.toFixed(2), "€");
// } else {
//     sconto = 0;
//     console.log("Con " + kmPasseggero + " km");
//     console.log("Il prezzo intero del biglietto è:", prezzoBiglietto.toFixed(2), "€");
//     console.log("Lo sconto applicato è:", sconto.toFixed(2), "€");
// }

// prezzoFinale = prezzoBiglietto - sconto;
// console.log("Il prezzo finale è:", prezzoFinale.toFixed(2), "€");


// ________________________________________________________________________________________________________________

//QUARTO METODO: il più dettagliato

// const kmPasseggero = parseInt(prompt("Quanti km vuoi percorrere?"));
// const eta = parseInt(prompt("quanti anni hai?"));

// const prezzoBiglietto = kmPasseggero * 0.21;

// let sconto;

// let prezzoFinale;

// if (eta < 18) {
//     sconto = prezzoBiglietto * 0.2;
//     console.log("Con " + kmPasseggero + " km");
//     console.log("Il prezzo intero del biglietto è:", prezzoBiglietto.toFixed(2), "€");
//     console.log("Lo sconto applicato è:", sconto.toFixed(2), "€");
//     prezzoFinale = prezzoBiglietto - sconto;
//     console.log("Il prezzo finale è:", prezzoFinale.toFixed(2), "€");
// } else if (eta > 65) {
//     sconto = prezzoBiglietto * 0.4;
//     console.log("Con " + kmPasseggero + " km");
//     console.log("Il prezzo del intero biglietto è:", prezzoBiglietto.toFixed(2), "€");
//     console.log("Lo sconto applicato è:", sconto.toFixed(2), "€");
//     prezzoFinale = prezzoBiglietto - sconto;
//     console.log("Il prezzo finale è:", prezzoFinale.toFixed(2), "€");
// } else {
//     sconto = 0;
//     console.log("Con " + kmPasseggero + " km");
//     console.log("Il prezzo intero del biglietto è:", prezzoBiglietto.toFixed(2), "€");
//     console.log("Lo sconto applicato è:", sconto.toFixed(2), "€");
//     prezzoFinale = prezzoBiglietto - sconto;
//     console.log("Il prezzo finale è:", prezzoFinale.toFixed(2), "€");
// }


