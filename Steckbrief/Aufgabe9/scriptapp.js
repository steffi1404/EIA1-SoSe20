"use strict";
console.log("hahahahahio");
var kinder = 3;
window.addEventListener("load", function () {
    document.querySelectorAll(".delete")[0].addEventListener("click", function () { removeElement(0); });
    document.querySelectorAll(".delete")[1].addEventListener("click", function () { removeElement(1); });
    document.querySelectorAll(".delete")[2].addEventListener("click", function () { removeElement(2); });
});
function addElement() {
    var li = document.createElement("li"); //erstelle neues Listenelement
    document.getElementById("LIST").appendChild(li); // füge neues li in ul "LI" ein
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox); // füge zu li noch checkbox hinzu
    var inputValue = document.getElementById("myInput").value; // Inhalt von "input" von "myInput" beziehen
    var text = document.createTextNode(inputValue); // Inhalt von value ist ein Text
    li.appendChild(text); // füge Textinhalt zu neuem li hinzu
    var icon = document.createElement("i"); //erstelle ein Element
    icon.className = "fas fa-trash-alt delete"; //gebe Elemet Klasse "fas..."
    icon.addEventListener("click", function () { removeElement(kinder); });
    li.appendChild(icon); //füge zu neuem li Element das Icon hinzu
    kinder++;
    counter();
}
//Versuche Löschfuntion: 
/* function removeElement(): void {
var bye = document.getElementsByClassName("delete");
delete.removeChild;
} */
// function removeElement(feld: number): void {
//   switch (feld) {
//     case 0:
//       break;
//     default:
//       break;
//   }
// }
function removeElement(feld) {
    var LI = document.getElementById("LIST");
    var task = 0;
    if (LI.hasChildNodes()) {
        LI.removeChild(LI.childNodes[feld]);
        // LI.removeChild(LI.childNodes[1]);
        // LI.removeChild(LI.childNodes[2]);
    }
    kinder--;
    counter();
}
function counter() {
    var index = 0;
    console.log("Anzahl Aufgaben:" + kinder);
    document.getElementById("count").innerText = "Es gibt " + kinder + " Aufgaben zu erledigen.";
}
//# sourceMappingURL=scriptapp.js.map