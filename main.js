
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