// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================
let n = 0;
let x = 0;

while (n < 3) {
    n++;
    x += n;
    console.log("Hoeree! ");
}
// De volgende code werkt niet:
/*let h = 0;
h = "Hoera!";
for (h> 0; h < 4; h++) {

    console.log(h);
}*/

//Het kan ook met een functie:
function stringRepeat(n, str) {
    let output = ''
    for(let i = 0; i < n; i++) {
        output+=str
    }
    return output
}

console.log(stringRepeat(3,"Hello!\n"));


//Er is ook n out of the box repeat methode in Javascript
const ho = "Hoera!\n";
let times = ho.repeat(3);
console.log(times);

// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
 // ==========================================
//Of maak een functie:
const repeatString = function repeatString( loop, tms) {
    loop = "Loop...";
    if (tms > 0) {
        console.log(loop.repeat(tms)) ;
    } else if (tms < 4) {
       console.log("klaar!");
    } else {
        console.log("Stop!");
    }
}
let l = 0;
let k = 0;

while (l < 3) {
    l++;
    k += l;
    console.log("Loop...");
} console.log("Klaar!");


// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven

// Tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over..
// ==========================================

//Even odd

let odev;
for (let odev = 0; odev < 10; odev++) {

    if (odev % 2 === 0) {
        console.log(odev + " is even");
    }  else{
        console.log(odev + " is oneven");
    }
}


// ==========================================
// [BONUSOPDRACHT] - optioneel: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 9
// ==========================================
let j;
for (let j = 0; j < 10; j++) {

if (j < 3) {
        console.log(j);
    } else if (j > 2 && j < 6) {
        console.log("> " + j);
    } else{
        console.log(">> " + j);
    }
}