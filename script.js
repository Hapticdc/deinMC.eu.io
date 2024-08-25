console.log("Javascript wurde erfolgreich geladen!");

// Finde alle Elemente mit der Klasse 'nav-link'
var navLinks = document.querySelectorAll(".nav-link");

// Hinzufügen eines Event Listeners für jeden Link
navLinks.forEach(function (link) {
  link.addEventListener("mouseenter", function () {
    var sound = document.getElementById("hover-sound");
    sound.currentTime = 0; // Setzt den Sound zurück, falls er bereits abgespielt wurde
    sound.play();
  });
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault(); // Verhindert das Öffnen des Kontextmenüs überall auf der Seite
});

// Blockiert F12, Strg+Shift+I, Strg+Shift+C, Strg+Shift+J und Strg+U
document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey &&
      e.shiftKey &&
      (e.key === "I" || e.key === "C" || e.key === "J")) ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
  }
});

// Erkennt das Öffnen der Entwicklertools und gibt eine Warnung aus
(function () {
  const devtools = function () {};
  devtools.toString = function () {
    return "";
  };
  console.log("%c", devtools);
})();
