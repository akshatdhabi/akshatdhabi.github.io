var tee = document.getElementById('tshirt');
var teeTop = document.getElementById('tshirt-top');
var hair1 = document.getElementById('hair1');
var hair2 = document.getElementById('hair2');
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var glasses = document.getElementById("Glasses");
var isDarkLord = false;

function griff() {
  if (isDarkLord == false) {
    tee.style.fill = "#7f0909";
    teeTop.style.fill = "#ffc500";
    hair1.style.fill = "#3F1E05";
    hair2.style.fill = "#3F1E05";
  } else {
    window.alert("You cant Go Back Now!");
  }
}

function slyth() {
  if (isDarkLord == false) {
    tee.style.fill = "#0D6116";
    teeTop.style.fill = "#AAAAAA";
    hair1.style.fill = "#eeba30";
    hair2.style.fill = "#eeba30";
  } else {
    window.alert("You cant Go Back Now!");
  }
}

function lord() {
  isDarkLord = true;
  var bod = document.body;
  bod.classList.add("bg");
  tee.style.fill = "#000";
  teeTop.style.fill = "#ccc";
  hair1.style.fill = "#343434";
  hair2.style.fill = "#343434";
  glasses.style.fill = "firebrick";
  b1.style.stroke = "#000";
  b1.style.strokeWidth = "6";
  b2.style.stroke = "#000";
  b2.style.strokeWidth = "6";
  b1.style.transform = "rotate(-12deg) translate(-15px)";
  b2.style.transform = "rotate(12deg) translate(15px)";
}