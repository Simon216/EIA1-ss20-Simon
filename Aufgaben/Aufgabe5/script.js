"use strict";
var eur08 = 4965.7;
var eur = 4209.3;
var afr08 = 1028;
var afr = 1235.5;
var samer08 = 1132.6;
var samer = 1261.5;
var asia08 = 12954.7;
var namer = 6035.6;
var namer08 = 6600.4;
var asia = 16274.1;
var aus = 2100.5;
var aus08 = 1993;
var gesamt = eur + afr + samer + namer + asia + aus;
var proz1 = gesamt * 0.01;
var eurorel = eur / proz1;
var afrrel = afr / proz1;
var asiarel = asia / proz1;
var ausrel = aus / proz1;
var samerrel = samer / proz1;
var namerrel = namer / proz1;
var namerv = namer08 * 0.01;
var namerv2 = namer08 - namer;
var namerv3 = namerv2 / namerv * (-1);
var asiav = asia08 * 0.01;
var asiav2 = asia08 - asia;
var asiav3 = asiav2 / asiav * (-1);
var samerv = samer08 * 0.01;
var samerv2 = samer08 - samer;
var samerv3 = samerv2 / samerv * (-1);
var ausv = aus08 * 0.01;
var ausv2 = aus08 - aus;
var ausv3 = ausv2 / ausv;
var afrv = afr08 * 0.01;
var afrv2 = afr08 - afr;
var afrv3 = afrv2 / afrv * (-1);
var eurov = eur08 * 0.01;
var eurov2 = eur08 - eur;
var eurov3 = eurov2 / eurov * (-1);
console.log("Die Emission von Europa ist : " + eur + "kg C02");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit :  " + eurorel + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + eurov3 + "% verändert ");
console.log("2018 im Vergleich zu 2008 sind das" + eurov2 + "kg C02");
console.log("______________________________________________________");
console.log("Die Emission von Afrika ist : " + afr + "kg C02");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit :  " + afrrel + "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + afrv3 + "% verändert ");
console.log("2018 im Vergleich zu 2008 sind das" + afrv2 + "kg C02");
console.log("______________________________________________________");
console.log("Die Emission von Südamerika ist : " + samer + "kg C02");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit :  " + samerrel + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + samerv3 + "% verändert ");
console.log("2018 im Vergleich zu 2008 sind das" + samerv2 + "kg C02");
console.log("______________________________________________________");
console.log("Die Emission von Nordmerika ist : " + namer + "kg C02");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit :  " + namerrel + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + namerv3 + "% verändert ");
console.log("2018 im Vergleich zu 2008 sind das" + namerv2 + "kg C02");
console.log("______________________________________________________");
console.log("Die Emission von Asien ist : " + asia + "kg C02");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit :  " + asiarel + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + asiav3 + "% verändert ");
console.log("2018 im Vergleich zu 2008 sind das" + asiav2 + "kg C02");
console.log("______________________________________________________");
console.log("Die Emission von Australien ist : " + aus + "kg C02");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit :  " + ausrel + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + ausv3 + "% verändert ");
console.log("2018 im Vergleich zu 2008 sind das" + ausv2 + "kg C02");
