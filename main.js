
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

const tbody = document.createElement("tbody");//tbody elem létrehozása
table.appendChild(tbody); // A táblázat testébe


const form = document.getElementById("form");//bekérjük a form elementet a html-ből a getElementById-val és eltároljuk azt egy form nevű változóban

form.addEventListener("submit", function(e){//a form eseménykezelője, a gomb lenyomásakor aktiválódik
    e.preventDefault();//Ez azért van, hogy az űrlap alapértelmezetten ne fusson le 
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

    if(simpleValidation(rulerName,event1,year1) && masodikAdatokValidacio(event2,year2)){//Ha (a függvény meghívása és lefuttatása a megfelelő adatokkal) azaz meg van adva uralkodó, az első esemény és évszám és ha vagy a második évszám vagy a második esemény meg van adva akkor a másikat is meg kell adni, ha egyik sincs megadva akkor nem kötelező megadni őket
        const rulerNameValue = rulerName.value;//A bekért HTML element értékét eltároljuk egy változóban
        const event1Value = event1.value;//A bekért HTML element értékét eltároljuk egy változóban
        const year1Value = year1.value;//A bekért HTML element értékét eltároljuk egy változóban
        const event2Value = event2.value;//A bekért HTML element értékét eltároljuk egy változóban
        const year2Value = year2.value;//A bekért HTML element értékét eltároljuk egy változóban

        const newElement = {//Új objektum létrehozása
            ruler : rulerNameValue,//Az objektum tulajdonságának értéket adunk
            event : event1Value,//Az objektum tulajdonságának értéket adunk
            year : year1Value,//Az objektum tulajdonságának értéket adunk
            event2 : event2Value,//Az objektum tulajdonságának értéket adunk
            year2 : year2Value//Az objektum tulajdonságának értéket adunk
        }

    uralkodokArray.push(newElement);//Az objektumot hozzáadjuk az uralkodokArray-hoz
    tbody.innerHTML ="";//Töröljük a tábla elemeit, hogy ne generálódjon le többször
    renderTable(uralkodokArray);//A függvény meghívása és az array megadása amivel dolgoznia kell a függvénynek
    thisForm.reset();//Ha megnyomjuk a gombot automatikusan törli az űrlapot 
    }
})

headerGenerate();//A függvény meghívása
renderTable(uralkodokArray);//A függvény meghívása és az array megadása amivel dolgoznia kell a függvénynek


