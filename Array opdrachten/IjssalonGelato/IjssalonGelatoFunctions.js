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
  
  function PofZklant() {
    while (true) {
      let antwoord = prompt("Bent u een zakelijke of een particuliere klant? P of Z? ");
      if (antwoord === "Z" || antwoord === "P") {
        return antwoord;
      }
      alert(TXT);
    }
  }
  
  function Literijs() {
    while (true) {
      let input = prompt("Hoeveel liter ijs wilt u?");
      let liter = parseInt(input);
      if (!isNaN(liter) && liter > 0) return liter;
      alert(TXT);
    }
  }
  
  function smakenliterijs(liters, SmakenlijstLiter) {
    for (let i = 0; i < liters; i++) {
      while (true) {
        let smaak = prompt(`Welke smaak wilt u voor Liter ${i + 1}? A) Aardbei, C) Chocolade of V) Vanille? `);
        if (smaak === "A") {
          SmakenlijstLiter[0]["Aardbei"] += 1;
          break;
        } else if (smaak === "C") {
          SmakenlijstLiter[1]["Chocolade"] += 1;
          break;
        } else if (smaak === "V") {
          SmakenlijstLiter[2]["Vanille"] += 1;
          break;
        } else {
          alert(TXT);
        }
      }
    }
    return SmakenlijstLiter;
  }
  
  function Vraag_bolletjes(aantalbolletjes) {
    while (true) {
      let input = prompt("Hoeveel bolletjes wilt u?");
      let bolletjes = parseInt(input);
      if (!isNaN(bolletjes)) {
        if (bolletjes < 1) {
          alert("U moet minstens 1 bolletje kiezen.");
        } else if (bolletjes > MAX_BOLLETJES_BAKJE) {
          alert(`Sorry, in onze bakjes kunnen maar ${MAX_BOLLETJES_BAKJE} bolletjes.`);
        } else {
          aantalbolletjes += bolletjes;
          return [bolletjes, aantalbolletjes];
        }
      } else {
        alert(TXT);
      }
    }
  }
  
  function Smaken(aantal, lijst) {
    for (let i = 0; i < aantal; i++) {
      while (true) {
        let smaak = prompt(`Welke smaak wilt u voor bolletje ${i + 1}? A) Aardbei, C) Chocolade of V) Vanille? `);
        if (smaak === "A") {
          lijst[0]["Aardbei"] += 1;
          break;
        } else if (smaak === "C") {
          lijst[1]["Chocolade"] += 1;
          break;
        } else if (smaak === "V") {
          lijst[2]["Vanille"] += 1;
          break;
        } else {
          alert(TXT);
        }
      }
    }
    return lijst;
  }
  
  function Toppings(type, lijst) {
    let toppings = 0;
    while (true) {
      let topping = prompt("Wat voor topping wilt u? A) Geen, B) Slagroom, C) Sprinkels of D) Caramel Saus? ");
      if (topping === "A") break;
      else if (topping === "B") {
        lijst[0]["Slagroom"] += 1;
        toppings++;
        break;
      } else if (topping === "C") {
        lijst[1]["Sprinkels"] += 1;
        toppings++;
        break;
      } else if (topping === "D") {
        if (type === "bakje") lijst[3]["CaramelsausBakje"] += 1;
        else if (type === "hoorntje") lijst[2]["CaramelsausHoorntje"] += 1;
        toppings++;
        break;
      } else {
        alert(TXT);
      }
    }
    return [toppings, lijst];
  }
  
  function kies_horen_of_bakje(bolletjes, hoorntjes, bakjes) {
    let type = "";
    while (true) {
      if (bolletjes <= MAX_BOLLETJES_HOORNTJE) {
        let keuze = prompt(`Wilt u deze ${bolletjes} bolletjes in een hoorntje of bakje? `);
        if (keuze === "hoorntje") {
          hoorntjes++;
          type = "hoorntje";
          break;
        } else if (keuze === "bakje") {
          bakjes++;
          type = "bakje";
          break;
        } else {
          alert(TXT);
        }
      } else if (bolletjes <= MAX_BOLLETJES_BAKJE) {
        alert(`U krijgt uw ${bolletjes} bolletjes in een bakje.`);
        bakjes++;
        type = "bakje";
        break;
      } else {
        alert(TXT);
      }
    }
    return [hoorntjes, bakjes, type];
  }
  
  function totaalberekenen(aantalbolletjes, aantalbakjes, aantalhoorntjes, Toppingslijst) {
    let totaal = aantalbolletjes * PRIJSBOLLETJE + aantalbakjes * PRIJSBAKJE + aantalhoorntjes * PRIJSHOORNTJE;
    let toppingprijs = 0;
  
    for (let dict of Toppingslijst) {
      for (let [key, value] of Object.entries(dict)) {
        if (key === "Slagroom") toppingprijs += value * PRIJSSLAGROOM;
        else if (key === "Sprinkels") toppingprijs += value * PRIJSSPRINKELS;
        else if (key === "CaramelsausBakje") toppingprijs += value * PRIJSCARAMELBAKJE;
        else if (key === "CaramelsausHoorntje") toppingprijs += value * PRIJSCARAMELHOORNTJE;
      }
    }
  
    totaal += toppingprijs;
    return [Number(totaal.toFixed(2)), Number(toppingprijs.toFixed(2))];
  }
  
  function bonnetje(totaal, aantalbakjes, aantalhoorntjes, toppings, smaken, toppingPrijs, smakenLiter, typeKlant) {
    alert("------------ [Papi Gelato] ------------");
  
    if (typeKlant === "P") {
      for (let smaakDict of smaken) {
        for (let [smaak, aantal] of Object.entries(smaakDict)) {
          if (aantal > 0) {
            alert(`${smaak.padEnd(20)} ${String(aantal).padStart(3)} x €${PRIJSBOLLETJE.toFixed(2)} = €${(aantal * PRIJSBOLLETJE).toFixed(2)}`);
          }
        }
      }
  
      if (aantalbakjes > 0) {
        alert(`Bakje(s)             ${String(aantalbakjes).padStart(3)} x €${PRIJSBAKJE.toFixed(2)} = €${(aantalbakjes * PRIJSBAKJE).toFixed(2)}`);
      }
  
      if (aantalhoorntjes > 0) {
        alert(`Hoorntje(s)          ${String(aantalhoorntjes).padStart(3)} x €${PRIJSHOORNTJE.toFixed(2)} = €${(aantalhoorntjes * PRIJSHOORNTJE).toFixed(2)}`);
      }
  
      if (toppingPrijs > 0) {
        alert(`Toppings totaal             €${toppingPrijs.toFixed(2)}`);
      }
  
    } else if (typeKlant === "Z") {
      for (let smaakDict of smakenLiter) {
        for (let [smaak, aantal] of Object.entries(smaakDict)) {
          if (aantal > 0) {
            alert(`Liter ${smaak.padEnd(16)} ${String(aantal).padStart(2)} x €${LITERIJS.toFixed(2)} = €${(aantal * LITERIJS).toFixed(2)}`);
          }
        }
      }
      const btw = Number((totaal * (BTW / 100)).toFixed(2));
      alert(`BTW (${BTW}%)                   = €${btw.toFixed(2)}`);
    }
  
    alert("----------------------------------------");
    alert(`TOTAAL                     = €${totaal.toFixed(2)}`);
    alert("Bedankt en tot ziens!");
  }
  
  module.exports = {
    PofZklant,
    Vraag_bolletjes,
    kies_horen_of_bakje,
    Smaken,
    Toppings,
    totaalberekenen,
    Literijs,
    smakenliterijs,
    bonnetje
  };
  