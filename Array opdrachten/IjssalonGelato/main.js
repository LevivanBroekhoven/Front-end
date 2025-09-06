const prompt = require('prompt-sync')();
const alert = console.log;





const {
    TXT,
    MAX_BOLLETJES_BAKJE,
    MIN_BOLLETJES,
    MAX_BOLLETJES_HOORNTJE,
    PRIJSBOLLETJE,
    PRIJSBAKJE,
    PRIJSHOORNTJE,
    PRIJSSLAGROOM,
    PRIJSSPRINKELS,
    PRIJSCARAMELBAKJE,
    PRIJSCARAMELHOORNTJE,
    LITERIJS,
    BTW
  } = require('./IjssalonGelatoData.js');
  
  const {
    PofZklant,
    Vraag_bolletjes,
    kies_horen_of_bakje,
    Smaken,
    Toppings,
    totaalberekenen,
    Literijs,
    smakenliterijs,
    bonnetje
  } = require('./IjssalonGelatoFunctions.js');
  
  let aantalbolletjes = 0;
  let aantalbakjes = 0;
  let aantalhoorntjes = 0;
  let toppings = 0;
  let totaal = 0;
  let totaaltopping = 0;
  let literijs = 0;
  
  let Smakenlijst = [{ 'Aardbei': 0 }, { 'Chocolade': 0 }, { 'Vanille': 0 }];
  let SmakenlijstLiter = [{ 'Aardbei': 0 }, { 'Chocolade': 0 }, { 'Vanille': 0 }];
  let Toppingslijst = [
    { 'Slagroom': 0 },
    { 'Sprinkels': 0 },
    { 'CaramelsausHoorntje': 0 },
    { 'CaramelsausBakje': 0 }
  ];
  
  let doorgaan = "ja";
  alert("Welkom bij Papi Gelato!");
  
  let PofZ = PofZklant();
  
  if (PofZ === "P") {
    while (doorgaan.toLowerCase() !== "nee") {
      let [bolletje, nieuwAantalBolletjes] = Vraag_bolletjes(aantalbolletjes);
      aantalbolletjes = nieuwAantalBolletjes;
  
      let [nieuweHoorntjes, nieuweBakjes, typeTopping] = kies_horen_of_bakje(bolletje, aantalhoorntjes, aantalbakjes);
      aantalhoorntjes = nieuweHoorntjes;
      aantalbakjes = nieuweBakjes;
  
      Smakenlijst = Smaken(bolletje, Smakenlijst);
  
      let [toppingAantal, bijgewerkteToppinglijst] = Toppings(typeTopping, Toppingslijst);
      toppings += toppingAantal;
      Toppingslijst = bijgewerkteToppinglijst;
  
      doorgaan = prompt("Wilt u nog meer bestellen? (Ja/Nee)");
      [totaal, totaaltopping] = totaalberekenen(aantalbolletjes, aantalbakjes, aantalhoorntjes, Toppingslijst);
    }
  } else if (PofZ === "Z") {
    literijs = Literijs();
    SmakenlijstLiter = smakenliterijs(literijs, SmakenlijstLiter);
    totaal = literijs * LITERIJS;
  }
  
  bonnetje(totaal, aantalbakjes, aantalhoorntjes, toppings, Smakenlijst, totaaltopping, SmakenlijstLiter, PofZ);
  