"use strict";
//*Alle Emissionswerte der Kontinente von 2008/2018 (Werte aus Tabelle)....................................................................*//
var Europa08 = 4965.7;
var Europa18 = 4209.3;
var Africa08 = 1028;
var Africa18 = 1235.5;
var SouthAmerica08 = 1132.6;
var SouthAmerica18 = 1261.5;
var NorthAmerica08 = 6600.4;
var NorthAmerica18 = 6035.6;
var Asia08 = 12954.7;
var Asia18 = 16274.1;
var Australia08 = 1993;
var Australia18 = 2100.5;
var Gesamt = Europa18 + Africa18 + SouthAmerica18 + NorthAmerica18 + Asia18 + Australia18;
//*Europa..................................................................................................................................*//
console.log("Europa");
console.log("Die Emission von Europa ist:" + Europa18 + "kg CO2");
console.log("Relativ zur Gesamtemisson der Welt verursacht Europa damit" + (Europa18 / Gesamt * 100) + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um" + ((Europa18 - Europa08) / Europa18 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + (Europa18 - Europa08) + "kg CO2");
//*Africa..................................................................................................................................*//
console.log("Africa");
console.log("Die Emission von Africa ist:" + Africa18 + "kg CO2");
console.log("Relativ zur Gesamtemisson der Welt verursacht Africa damit" + (Africa18 / Gesamt * 100) + "%");
console.log("Für Africa hat sich 2018 im Vergleich zu 2008 die Emission um" + ((Africa18 - Africa08) / Africa18 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + (Africa18 - Africa08) + "kg CO2");
//*Asia....................................................................................................................................*//
console.log("Asia");
console.log("Die Emission von Asia ist:" + Asia18 + "kg CO2");
console.log("Relativ zur Gesamtemisson der Welt verursacht Asia damit" + (Asia18 / Gesamt * 100) + "%");
console.log("Für Asia hat sich 2018 im Vergleich zu 2008 die Emission um" + ((Asia18 - Asia08) / Asia18 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + (Asia18 - Asia08) + "kg CO2");
//*Australia.............................................................................................................................. *//
console.log("Australia");
console.log("Die Emission von Australia ist:" + Australia18 + "kg CO2");
console.log("Relativ zur Gesamtemisson der Welt verursacht Australia damit" + (Australia18 / Gesamt * 100) + "%");
console.log("Für Australia hat sich 2018 im Vergleich zu 2008 die Emission um" + ((Australia18 - Australia08) / Australia18 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + (Australia18 - Australia08) + "kg CO2");
//*North America...........................................................................................................................*//
console.log("North America");
console.log("Die Emission von North America ist:" + NorthAmerica18 + "kg CO2");
console.log("Relativ zur Gesamtemisson der Welt verursacht North America damit" + (NorthAmerica18 / Gesamt * 100) + "%");
console.log("Für North America hat sich 2018 im Vergleich zu 2008 die Emission um" + ((NorthAmerica18 - NorthAmerica08) / NorthAmerica18 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + (NorthAmerica18 - NorthAmerica08) + "kg CO2");
//*South America.......................................................................................................................... *//
console.log("South America");
console.log("Die Emission von South America ist:" + SouthAmerica18 + "kg CO2");
console.log("Relativ zur Gesamtemisson der Welt verursacht South America damit" + (SouthAmerica18 / Gesamt * 100) + "%");
console.log("Für South America hat sich 2018 im Vergleich zu 2008 die Emission um" + ((SouthAmerica18 - SouthAmerica08) / SouthAmerica18 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + (SouthAmerica18 - SouthAmerica08) + "kg CO2");
//# sourceMappingURL=script.js.map