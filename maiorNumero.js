let x = Number(prompt("digite um numero"));
let y = Number(prompt("digite um numero"));
let z = Number(prompt("digite um numero"));

if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
    if (x > y && x > z) {
        console.log("o numero maior é", x);
    } else if (y > x && y > z) {
        console.log("o numero maior é", y);
    } else {
        console.log("o numero maior é", z);
    }
} else {
    console.log("Não é um numero!");
}
