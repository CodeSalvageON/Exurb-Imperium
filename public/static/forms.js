const url1 = document.getElementById("url1");
const url2 = document.getElementById("url2");

document.getElementById("width").value = "500";
document.getElementById("height").value = "500";

$("#unblock1").submit(function () {
  event.preventDefault();
  window.open("https://borgcube.codesalvageon.repl.co/u/" + url1.value);
});

$("#unblock2").submit(function () {
  event.preventDefault();
  window.open("https://translate.google.com/translate?sl=auto&tl=en&u=" + url2.value);
});

$("#gameselect").submit(function () {
  event.preventDefault();
  document.getElementById("overflow").src = document.getElementById("game").value;
  document.getElementById("overflow").style.width = document.getElementById("width").value + "px";
  document.getElementById("overflow").style.height = document.getElementById("height").value + "px";
});