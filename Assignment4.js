//item and prices
let item1 = "sugar";
let item2 = "bread";
let item3 = "milk";
let item4 = "potatoes";

let price1 = 170;
let price2 = 200;
let price3 = 117;
let price4 = 80;

let total = price1 + price2 + price3 + price4;
let vat = total * 0.16;
let paid = 2000;
let change = paid - (total + vat);

document.getElementById("name1").innerHTML = item1;
document.getElementById("name2").innerHTML = item2;
document.getElementById("name3").innerHTML = item3;
document.getElementById("name4").innerHTML = item4;

document.getElementById("price1").innerHTML = price1;
document.getElementById("price2").innerHTML = price2;
document.getElementById("price3").innerHTML = price3;
document.getElementById("price4").innerHTML = price4;

document.getElementById("total").innerHTML = total;
document.getElementById("vat").innerHTML = vat.toFixed(2);
document.getElementById("paid").innerHTML = paid;
document.getElementById("change").innerHTML = change.toFixed(2);

document.getElementById("server").innerHTML = "John";

