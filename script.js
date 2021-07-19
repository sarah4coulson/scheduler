var nine = document.getElementById("hour-9");
var ten = document.getElementById("hour-10");
var eleven = document.getElementById("hour-11");
var twelve = document.getElementById("hour-12");
var thirteen = document.getElementById("hour-13");
var fourteen = document.getElementById("hour-14");
var fifteen = document.getElementById("hour-15");
var sixteen = document.getElementById("hour-16");
var seventeen = document.getElementById("hour-17");

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
console.log(sevenA);

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

if (na === currentHr) {
  nine.classList.add("present");
  nine.classList.remove("past");
  nine.classList.remove("future");
} else if (na < currentHr) {
  nine.classList.remove("present");
  nine.classList.add("past");
  nine.classList.remove("future");
} else {
  nine.classList.remove("present");
  nine.classList.remove("past");
  nine.classList.add("future");
}

if (ta === currentHr) {
  ten.classList.add("present");
  ten.classList.remove("past");
  ten.classList.remove("future");
} else if (na < currentHr) {
  ten.classList.remove("present");
  ten.classList.add("past");
  ten.classList.remove("future");
} else {
  ten.classList.remove("present");
  ten.classList.remove("past");
  ten.classList.add("future");
}

if (ea === currentHr) {
  eleven.classList.add("present");
  eleven.classList.remove("past");
  eleven.classList.remove("future");
} else if (na < currentHr) {
  eleven.classList.remove("present");
  eleven.classList.add("past");
  eleven.classList.remove("future");
} else {
  eleven.classList.remove("present");
  eleven.classList.remove("past");
  eleven.classList.add("future");
}

if (twa === currentHr) {
  twelve.classList.add("present");
  twelve.classList.remove("past");
  twelve.classList.remove("future");
} else if (na < currentHr) {
  twelve.classList.remove("present");
  twelve.classList.add("past");
  twelve.classList.remove("future");
} else {
  twelve.classList.remove("present");
  twelve.classList.remove("past");
  twelve.classList.add("future");
}

if (tha === currentHr) {
  thirteen.classList.add("present");
  thirteen.classList.remove("past");
  thirteen.classList.remove("future");
} else if (na < currentHr) {
  thirteen.classList.remove("present");
  thirteen.classList.add("past");
  thirteen.classList.remove("future");
} else {
  thirteen.classList.remove("present");
  thirteen.classList.remove("past");
  thirteen.classList.add("future");
}

if (foa === currentHr) {
  fourteen.classList.add("present");
  fourteen.classList.remove("past");
  fourteen.classList.remove("future");
} else if (na < currentHr) {
  fourteen.classList.remove("present");
  fourteen.classList.add("past");
  fourteen.classList.remove("future");
} else {
  fourteen.classList.remove("present");
  fourteen.classList.remove("past");
  fourteen.classList.add("future");
}

if (fia === currentHr) {
  fifteen.classList.add("present");
  fifteen.classList.remove("past");
  fifteen.classList.remove("future");
} else if (na < currentHr) {
  fifteen.classList.remove("present");
  fifteen.classList.add("past");
  fifteen.classList.remove("future");
} else {
  fifteen.classList.remove("present");
  fifteen.classList.remove("past");
  fifteen.classList.add("future");
}

if (sia === currentHr) {
  sixteen.classList.add("present");
  sixteen.classList.remove("past");
  sixteen.classList.remove("future");
} else if (na < currentHr) {
  sixteen.classList.remove("present");
  sixteen.classList.add("past");
  sixteen.classList.remove("future");
} else {
  sixteen.classList.remove("present");
  sixteen.classList.remove("past");
  sixteen.classList.add("future");
}

if (sea === currentHr) {
  seventeen.classList.add("present");
  seventeen.classList.remove("past");
  seventeen.classList.remove("future");
} else if (na < currentHr) {
  seventeen.classList.remove("present");
  seventeen.classList.add("past");
  seventeen.classList.remove("future");
} else {
  seventeen.classList.remove("present");
  seventeen.classList.remove("past");
  seventeen.classList.add("future");
}

localStorage.setItem("hour-9");
localStorage.setItem("hour-10");
localStorage.setItem("hour-11");
localStorage.setItem("hour-12");
localStorage.setItem("hour-13");
localStorage.setItem("hour-14");
localStorage.setItem("hour-15");
localStorage.setItem("hour-16");
localStorage.setItem("hour-17");

nine = localStorage.getItem("hour-9");
ten = localStorage.getItem("hour-10");
eleven = localStorage.getItem("hour-11");
twelve = localStorage.getItem("hour-12");
thirteen = localStorage.getItem("hour-13");
fourteen = localStorage.getItem("hour-14");
fifteen = localStorage.getItem("hour-15");
sixteen = localStorage.getItem("hour-16");
seventeen = localStorage.getItem("hour-17");

//localStorage.setItem("lastname", "Smith");
//document.getElementById("result").innerHTML = localStorage.getItem("lastname");
