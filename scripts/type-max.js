var i = 0;
var txt = "Hi Max! I'm Samuel Rios-Lazo";
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // Add cursor when typing is finished
    document.getElementById("cursor").style.display = "inline";
  }
}

window.onload = function () {
  typeWriter();
};
