"use strict";
//*TEIL1---------------------------------------------------------------------------------------------------------------------------------------*//
window.addEventListener("load", function () {
    //*SOUNDS--------------------------------------------------------------------------------------------------------------------------------------*//
    var sounds = [];
    sounds.push(new Audio("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/A.mp3"));
    sounds.push(new Audio("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/C.mp3"));
    sounds.push(new Audio("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/F.mp3"));
    sounds.push(new Audio("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/G.mp3"));
    sounds.push(new Audio("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/hihat.mp3"));
    sounds.push(new Audio("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/kick.mp3"));
    sounds.push(new Audio("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/laugh-1.mp3"));
    sounds.push(new Audio("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/laugh-2.mp3"));
    sounds.push(new Audio("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/snare.mp3"));
    //*ZENTRALE FUNKTION---------------------------------------------------------------------------------------------------------------------------*//
    function playSample(samplenumber) {
        sounds[samplenumber].play();
    }
    //*TEIL2---------------------------------------------------------------------------------------------------------------------------------------*//
    //*Inspiriert von Annette----------------------------------------------------------------------------------------------------------------------*//
    function Beat() {
        setInterval(function () { playSample(4); playSample(5); playSample(8); }, 300);
    }
    //*EVENT LISTENER------------------------------------------------------------------------------------------------------------------------------*//
    document.querySelector("#b1")?.addEventListener("click", function () { playSample(0); });
    document.querySelector("#b2")?.addEventListener("click", function () { playSample(1); });
    document.querySelector("#b3")?.addEventListener("click", function () { playSample(2); });
    document.querySelector("#b4")?.addEventListener("click", function () { playSample(3); });
    document.querySelector("#b5")?.addEventListener("click", function () { playSample(4); });
    document.querySelector("#b6")?.addEventListener("click", function () { playSample(5); });
    document.querySelector("#b7")?.addEventListener("click", function () { playSample(6); });
    document.querySelector("#b8")?.addEventListener("click", function () { playSample(7); });
    document.querySelector("#b9")?.addEventListener("click", function () { playSample(8); });
    document.querySelector("play").addEventListener("click", Beat);
});
//# sourceMappingURL=script7.js.map