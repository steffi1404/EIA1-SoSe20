//*AUFGABE8 mit Impressionen von Colleen Zeller*//
// tslint:disable-next-line: typedef
window.addEventListener("load", function () {



//*SOUNDS/EVENT LISTENER*//
  // tslint:disable-next-line: typedef
  document.querySelector("#b1").addEventListener("click", function () { playsample("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/A.mp3"); });
  // tslint:disable-next-line: typedef
  document.querySelector("#b2").addEventListener("click", function () { playsample("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/C.mp3"); });
  // tslint:disable-next-line: typedef
  document.querySelector("#b3").addEventListener("click", function () { playsample("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/F.mp3"); });
  // tslint:disable-next-line: typedef
  document.querySelector("#b4").addEventListener("click", function () { playsample("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/G.mp3"); });
  // tslint:disable-next-line: typedef
  document.querySelector("#b5").addEventListener("click", function () { playsample("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/hihat.mp3"); });
  // tslint:disable-next-line: typedef
  document.querySelector("#b6").addEventListener("click", function () { playsample("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/kick.mp3"); });
  // tslint:disable-next-line: typedef
  document.querySelector("#b7").addEventListener("click", function () { playsample("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/laugh-1.mp3"); });
  // tslint:disable-next-line: typedef
  document.querySelector("#b8").addEventListener("click", function () { playsample("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/laugh-2.mp3"); });
  // tslint:disable-next-line: typedef
  document.querySelector("#b9").addEventListener("click", function () { playsample("https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/snare.mp3"); });
  document.querySelector("#record").addEventListener("click", recordBeat);
  document.querySelector("#play").addEventListener("click", playStop);
  document.querySelector("#delete").addEventListener("click", deleteBeat);

});




//*REIHENFOLGE SOUNDS-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*//
let beats: string[] = ["https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/kick.mp3", "https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/snare.mp3", "https://raw.githubusercontent.com/steffi1404/EIA1-SoSe20/master/Steckbrief/Audio/hihat.mp3"];
let recording: boolean = false;



//*INTERVALL BEAT*//
let beatIntervall: number = undefined;



//*SOUND ABSPIELEN PLAYSAMPLE*//
function playsample(mp3FileName: string): void { if (recording) { beats.push(mp3FileName); }
                                                 const sound: HTMLAudioElement = new Audio(mp3FileName); sound.play(); }



//*BEAT ABSPIELEN*//
// tslint:disable-next-line: typedef
function playBeat() { var index: number = 0;
    // tslint:disable-next-line: typedef
beatIntervall = setInterval(function () {playsample(beats[index]);
                                         index += 1;
                                        // tslint:disable-next-line: align
                                        if (index >= beats.length) { index = 0; }}, 500); }



//*SOUND PLAY UND STOPP FUNKTION*//
// tslint:disable-next-line: typedef
function playStop(): void {    let play = document.querySelector("#play");
                               if (play.className == "fas fa-play play-button") {
                                   play.className = "fas fa-stop play-button"; playBeat(); } 
                             else {play.className = "fas fa-play play-button";
                                   clearInterval(beatIntervall); } }



//*SOUND AUFNEHMEN*//
function recordBeat(): void { if (recording) { recording = false; }
                              else { recording = true; } }



//*SOUND LÖSCHEN*//
// tslint:disable-next-line: typedef
function deleteBeat() { beats = []; }

