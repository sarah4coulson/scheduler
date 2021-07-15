var nine = document.getElementById("hour-9");
var ten = document.getElementById("hour-10");
var eleven = document.getElementById("hour-11");
var twelve = document.getElementById("hour-12");
var thirteen = document.getElementById("hour-13");
var fourteen = document.getElementById("hour-14");
var fifteen = document.getElementById("hour-15");
var sixteen = document.getElementById("hour-16");

var nineA = document.getElementById("9").innerText;
console.log(nineA);

var tenA = document.getElementById("10").innerText;
console.log(tenA);

var eleA = document.getElementById("11").innerText;

var tweA = document.getElementById("12").innerText;

var thirtA = document.getElementById("13").innerText;

var fourtA = document.getElementById("14").innerText;

var fiftA = document.getElementById("15").innerText;

var sixtenA = document.getElementById("16").innerText;

var sevenA = document.getElementById("17").innerText;

var na = parseInt(nineA);
var ta = parseInt(tenA);
var ea = parseInt(eleA);
var twa = parseInt(tweA);
var tha = parseInt(thirtA) + 12;
var foa = parseInt(fourtA) + 12;
var fia = parseInt(fiftA) + 12;
var sia = parseInt(sixtenA) + 12;
var sea = parseInt(sevenA) + 12;

var currentHr = parseInt(moment().format("HH"));
console.log(currentHr);
console.log(sea);

if () {

};