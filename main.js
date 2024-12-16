
const uralkodokArray = [//tömb létrehozása
{//1.elem
    ruler: "I. István",//ruler az elem tulajdonsága, "I. IStván" az értéke
    event: "Koronázás",//event az elem tulajdonsága, "Koronázás" az értéke
    year: "1000",//year az elem tulajdonsága, "1000" az értéke
    event2:"Pannonhalmi apátság megalapítása",//event2 az elem tulajdonsága, "Pannonhalmi apátság megalapítása" az értéke
    year2:"1001"//year2 az elem tulajdonsága, "1001" az értéke
},
{//2.elem
    ruler: "IV. Béla",//ruler az elem tulajdonsága, "Iv. Béla" az értéke
    event:"Tatárjárás",//event az elem tulajdonsága, "Tatárjárás" az értéke
    year:"1241-1242",//year az elem tulajdonsága, "1241-1242" az értéke
},
{//3.elem
    ruler: "Mátyás király",//ruler az elem tulajdonsága, "Mátyás király" az értéke
    event:"Bécs elfoglalása",//event az elem tulajdonsága, "Bécs elfoglalása" az értéke
    year: "1485",//year az elem tulajdonsága, "1485" az értéke
    event2: "Kenyármezei csata",//event2 az elem tulajdonsága, "Kenyérmezei csata" az értéke
    year2: "1479",//year2 az elem tulajdonsága, "1479" az értéke
},
{//4.elem
    ruler: "II: Rákóczi Ferenc",//ruler az elem tulajdonsága, "II. Rákóczi Ferenc" az értéke
    event:"A szabadságharc kezdete",//event az elem tulajdonsága, "A szabadságharc kezdete" az értéke
    year:"1703",//year az elem tulajdonsága, "A szabadságharc kezdete" az értéke
    event2: "A szabadságharc vége",//event2 az elem tulajdonsága, "A szabadságharc vége" az értéke
    year2: "1711",//year2 az elem tulajdonsága, "1711" az értéke
}
];

const headerObj = {//Új fejléc objektum
        headerRuler: "Uralkodó",//headerRuler tulajdonság, "Uralkodó" az értéke
        headerEvent: "Esemény",//headerEvent tulajdonság, "Esemény" az értéke
        headerYear: "Évszám",//headerYear tulajdonság, "Évszám" az értéke
}

const table = document.createElement("table"); // Táblázat létrehozása
document.body.appendChild(table); // Hozzáadás a body-hoz

const colgroup = document.createElement("colgroup");//colgroup létrehozása, ez fog felelni a színezett oszlopokért
table.appendChild(colgroup); // Hozzáadás a táblázathoz

const col1 = document.createElement("col");//Megadjuk, hogy melyik oszlopról beszélünk
col1.span = '1';//Meddig ér el ennek az oszlopnak a hatásköre
col1.style.backgroundColor = "red";//Az oszlop színezése
colgroup.appendChild(col1); // Hozzáadás a colgroup-hoz

const col2 = document.createElement("col");//Megadjuk, hogy melyik oszlopról beszélünk
col2.span = '1';//Meddig ér el ennek az oszlopnak a hatásköre
colgroup.appendChild(col2); // Hozzáadás a colgroup-hoz

const col3 = document.createElement("col");//Megadjuk, hogy melyik oszlopról beszélünk
col3.span = '1';//Meddig ér el ennek az oszlopnak a hatásköre
col3.style.backgroundColor = "red";//Az oszlop színezése
colgroup.appendChild(col3); // Hozzáadás a colgroup-hoz

const thead = document.createElement("thead");//thead elem létrehozása
table.appendChild(thead); // A táblázat fejlécébe

const thead_tr = document.createElement("tr");//tr elem létrehozása a theaden belül
thead.appendChild(thead_tr); // A fejlécbe

const th = document.createElement("th");//th elem létrehozása a tr-en belül
th.innerHTML = headerObj.headerRuler;//a th értéke a headerObj objektum headerRuler tulajdonságának az értéke
thead_tr.appendChild(th); // A fejlécbe

const th2 = document.createElement("th")//th elem létrehozása a tr-en belül
th2.innerHTML = headerObj.headerEvent;//a th értéke a headerObj objektum headerEvenet tulajdonságának az értéke
thead_tr.appendChild(th2); // A fejlécbe

const th3 = document.createElement("th");//th elem létrehozása a tr-en belül
th3.innerHTML = headerObj.headerYear;//a th értéke a headerObj objektum headerYear tulajdonságának az értéke
thead_tr.appendChild(th3); // A fejlécbe

const tbody = document.createElement("tbody");//tbody elem létrehozása
table.appendChild(tbody); // A táblázat testébe

function renderTable(){//Új függvény definiálása
for(const Currentelement of uralkodokArray){//Bejárjuk az uralkodokArray-t a Currentelement-tel

    const tbody_tr = document.createElement("tr");//tr elem létrehozása a tbody-n belül
    tbody.appendChild(tbody_tr);//Belerakjuk a tbody-ba

    const ruler = document.createElement("td");//td elem létrehozása a tr-en belül
    ruler.innerHTML = Currentelement.ruler;//A ruler cella értékének beállítása az aktuális eseménnyel, ami a Currentelement ruler tulajdonságának az értéke
    tbody_tr.appendChild(ruler);//Belerakjuk a tr-be

    const event = document.createElement("td");//td elem létrehozása a tr-en belül
    event.innerHTML = Currentelement.event;// Az event cella értékének beállítása az aktuális eseménnyel, ami a Currentelement event tulajdonságának az értéke
    tbody_tr.appendChild(event);//Belerakjuk a tr-be

    const year = document.createElement("td");//td elem létrehozása a tr-en belül
    year.innerHTML = Currentelement.year;// A year cella értékének beállítása az aktuális évszámmal, ami a Currentelement year tulajdonságának az értéke
    tbody_tr.appendChild(year);//Belerakjuk a tr-be


    if(Currentelement.event2 && Currentelement.year2 !== undefined){//Ha az event2 és a year2-nek van értéke, akkor: 

        const defined_tr = document.createElement("tr")//tr elem létrehozása a tbody-n belül
        tbody.appendChild(defined_tr);//Belerakjuk a tbody-ba

        ruler.rowSpan = "2";//A ruler elementnek conjuk össze a sorait, hogy ne legyen üres cella

        const event2 = document.createElement("td");//td elem létrehozása a tr-en belül
        event2.innerHTML = Currentelement.event2;//az event2 td elem értékének a megadása, a tömb event2 tulajdonságának az aktuális értéke
        defined_tr.appendChild(event2);//Belerakjuk a tr-be

        const year2 = document.createElement("td");//td elem létrehozása a tr-en belül
        year2.innerHTML = Currentelement.year2;//az year2 td elem értékének a megadása, a tömb year2 tulajdonságának az aktuális értéke
        defined_tr.appendChild(year2);//Belerakjuk a tr-be
    }

}
}
renderTable();//A függvény meghívása

const form = document.getElementById("form");//bekérjük a form elementet a html-ből a getElementById-val és eltároljuk azt egy form nevű változóban

form.addEventListener("submit", function(e){//a form eseménykezelője, a gomb lenyomásakor aktiválódik
    e.preventDefault();//Ez azért van, hogy az űrlap alapértelmezetten lefusson
    const rulerName = document.getElementById("uralkodo_nev");//Bekérjük a HTML elementet az id alapján és eltároljuk azt egy változóban
    const event1 = document.getElementById("esemeny1");//Bekérjük a HTML elementet az id alapján és eltároljuk azt egy változóban
    const year1 = document.getElementById("evszam1");//Bekérjük a HTML elementet az id alapján és eltároljuk azt egy változóban
    const event2 = document.getElementById("esemeny2");//Bekérjük a HTML elementet az id alapján és eltároljuk azt egy változóban
    const year2 = document.getElementById("evszam2");//Bekérjük a HTML elementet az id alapján és eltároljuk azt egy változóban

    const thisForm = e.currentTarget;//Az eseményt kiváltó form benne van a thisForm változóban
    const elementWithError = thisForm.querySelectorAll(".error");//Minden olyan element aminek van error class-a
    for(const errorElement of elementWithError){//Végigmegyünk az errorElementteé a bekért elemeken
        errorElement.innerHTML ="";//lenullázzuk az elemek tartalmát
    }
    let valid = true; //A valid alapértelmezetten true, azaz nincs hiba

    const rulerNameValue = rulerName.value;//A bekért HTML element értékét eltároljuk egy változóban
    const event1Value = event1.value;//A bekért HTML element értékét eltároljuk egy változóban
    const year1Value = year1.value;//A bekért HTML element értékét eltároljuk egy változóban
    const event2Value = event2.value;//A bekért HTML element értékét eltároljuk egy változóban
    const year2Value = year2.value;//A bekért HTML element értékét eltároljuk egy változóban

    if(rulerNameValue === ""){//Ha az uralkodó értéke nem lett megadva
        const parentElement = rulerName.parentElement;//a parentElementben tároljuk el a rulerName parentElementjét ami ebben az esetben a div classa, a field(mert ebben a divben van benne))
        const errorPlace = parentElement.querySelector(".error");//A parentelemen belüli error classal ellátott elem keresése és változóban tárolása
        if(errorPlace != undefined){//Ha az error elem létezik
            errorPlace.innerHTML = "Az uralkodó nevének megadása kötelező"//Érték megadása
        }
        valid = false;//És már van hiba az oldalban, tehát megbukott a validáción
    }

    if(event1Value === ""){//Ha az esemény értéke nem lett megadva
        const parentElement = event1.parentElement;//a parentElementben tároljuk el az event1  parentElementjét ami ebben az esetben a div classa, a field(mert ebben a divben van benne))
        const errorPlace = parentElement.querySelector(".error");//A parentelemen belüli error classal ellátott elem keresése és változóban tárolása
        if(errorPlace != undefined){//Ha az error elem létezik
            errorPlace.innerHTML = "Az esemény megadása kötelező"//Érték megadása
        }
        valid = false;//És már van hiba az oldalban, tehát megbukott a validáción
    }

    if(year1Value === ""){//Ha az évszám  értéke nem lett megadva
        const parentElement = year1.parentElement;//a parentElementben tároljuk el az year1  parentElementjét ami ebben az esetben a div classa, a field(mert ebben a divben van benne))
        const errorPlace = parentElement.querySelector(".error");//A parentelemen belüli error classal ellátott elem keresése és változóban tárolása
        if(errorPlace != undefined){//Ha az error elem létezik
            errorPlace.innerHTML = "Az esemény évszámának megadása kötelező";//Érték megadása
        }
        valid = false;//És már van hiba az oldalban, tehát megbukott a validáción
    }

    if(valid){//Ha minden szükséges elem(uralkodó, esemény és annak évszáma) meg van adva akkor mehet tovább a generálás
        const newElement = {//Új objektum létrehozása
            ruler : rulerNameValue,//Az objektum tulajdonságának értéket adunk
            event : event1Value,//Az objektum tulajdonságának értéket adunk
            year : year1Value,//Az objektum tulajdonságának értéket adunk
            event2 : event2Value,//Az objektum tulajdonságának értéket adunk
            year2 : year2Value//Az objektum tulajdonságának értéket adunk
        }
    

   
    uralkodokArray.push(newElement);//Az objektumot hozzáadjuk az uralkodokArray-hoz
    tbody.innerHTML ="";//Töröljük a tábla elemeit, hogy ne generálódjon le többször
    renderTable();//A függvény meghívása
    thisForm.reset();//Ha megnyomjuk a gombot automatikusan törli az űrlapot
    }
})