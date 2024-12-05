
const uralkodokArray = [//tömb létrehozása
{//1. elem
    headerRuler: "Uralkodó",//headerRuler az elem tulajdonsága, "Uralkodó" az értéke
    headerEvent: "Esemény",//headerEvent az elem tulajdonsága, "Esemény" az értéke
    headerYear: "Évszám",//headerYear az elem tulajdonsága, "Évszám" az értéke
},
{//2.elem
    ruler1: "I. István",//ruler1 az elem tulajdonsága, "I. IStván" az értéke
    event1: "Koronázás",//event1 az elem tulajdonsága, "Koronázás" az értéke
    year1: "1000",//year1 az elem tulajdonsága, "1000" az értéke
    event1_2:"Pannnhalmi apátság megalapítása",//event1_2 az elem tulajdonsága, "Pannonhalmi apátság megalapítása" az értéke
    year1_2:"1001"//year1_2 az elem tulajdonsága, "1001" az értéke
},
{//3.elem
    ruler2: "IV. Béla",//ruler2 az elem tulajdonsága, "Iv. Béla" az értéke
    event2:"Tatárjárás",//event2 az elem tulajdonsága, "Tatárjárás" az értéke
    year2:"1241-1242",//year2 az elem tulajdonsága, "1241-1242" az értéke
},
{//4.elem
    ruler3: "Mátyás király",//ruler3 az elem tulajdonsága, "Mátyás király" az értéke
    event3:"Bécs elfoglalása",//event3 az elem tulajdonsága, "Bécs elfoglalása" az értéke
    year3: "1485",//year3 az elem tulajdonsága, "1485" az értéke
    event3_2: "Kenyármezei csata",//event3_2 az elem tulajdonsága, "Kenyérmezei csata" az értéke
    year3_2: "1479",//year3_2 az elem tulajdonsága, "1479" az értéke
},
{//4.elem
    ruler4: "II: Rákóczi Ferenc",//headruler4erYear az elem tulajdonsága, "II. Rákóczi Ferenc" az értéke
    event4:"A szabadságharc kezdete",//event4 az elem tulajdonsága, "A szabadságharc kezdete" az értéke
    year4:"1703",//year4 az elem tulajdonsága, "A szabadságharc kezdete" az értéke
    event4_2: "A szabadságharc vége",//event4_2 az elem tulajdonsága, "A szabadságharc vége" az értéke
    year4_2: "1711",//year4_2 az elem tulajdonsága, "1711" az értéke
}
]
const table = document.createElement("table");//Létrehozok egy table elemet ami a táblázatomat fogja tartalmazni
document.body.appendChild(table);//Hozzáadom a bodyhoz

const colgroup = document.createElement("colgroup");//Létrehozok egy colgroup  elemet amiben a téblázat színezése lesz
table.appendChild(colgroup);//Hozzáadom a Tablehöz

const col1 = document.createElement("col");//col elem létrehozása
col1.style.backgroundColor = "red";//Az első oszlop háátérszíne piros lesz
colgroup.appendChild(col1);//Hozzáadom a colgrouphoz

const col2 = document.createElement("col");//col elem létrehozása
colgroup.appendChild(col2);//Hozzáadom a colgrouphoz

const col3 = document.createElement("col");//col elem létrehozása
col3.style.backgroundColor = "red";//Az harmadik  oszlop háátérszíne piros lesz
colgroup.appendChild(col3);//Hozzáadom a colgrouphoz

const thead = document.createElement("thead");//Thead elem létrehozása
table.appendChild(thead);//Hozzárakom a tablehöz

const thead_tr = document.createElement("tr");//Theaden belüli tr létrehozása
thead.appendChild(thead_tr);//Hozzárakom a theadhez


const th1 = document.createElement("th");//tr-en belüli th létrehozása
thead_tr.appendChild(th1);//Hozzárakom a tr-hez
th1.innerHTML = uralkodokArray[0].headerRuler;//az uralkodokArray első elemének a tulajdonságának az értéke


const th2 = document.createElement("th");//tr-en belüli th létrehozása
thead_tr.appendChild(th2);//Hozzárakom a tr-hez
th2.innerHTML = uralkodokArray[0].headerEvent;//az uralkodokArray első elemének a tulajdonságának az értéke


const th3 = document.createElement("th");//tr-en belüli th létrehozása
thead_tr.appendChild(th3);;//Hozzárakom a tr-hez
th3.innerHTML = uralkodokArray[0].headerYear;//az uralkodokArray első elemének a tulajdonságának az értéke

const tbody = document.createElement("tbody");//Tbody elem létrehozása a tableön belül
table.appendChild(tbody);//Hozzáadom a table-höz


const tbody_tr1 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr1);//Hozzárakom a tbody-hoz


const td1 = document.createElement("td");//tr-en belüli td létrehozása
td1.rowSpan = "2";//A mellette lévő cella egybeolvasztása
td1.innerHTML = uralkodokArray[1].ruler1;//az uralkodokArray második elemének a tulajdonságának az értéke
tbody_tr1.appendChild(td1);


const td2 = document.createElement("td");//tr-en belüli td létrehozása
td2.innerHTML =  uralkodokArray[1].event1;//az uralkodokArray második elemének a tulajdonságának az értéke
tbody_tr1.appendChild(td2);//Hozzárakjuk a td-t a tbodyhoz


const td3 = document.createElement("td");//tr-en belüli td létrehozása
td3.innerHTML =  uralkodokArray[1].year1;//az uralkodokArray második elemének a tulajdonságának az értéke
tbody_tr1.appendChild(td3);//Hozzárakjuk a td-t a tbodyhoz

const tbody_tr2 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr2);//Hozzárakjuk a td-t a tbodyhoz


const td4 = document.createElement("td");//tr-en belüli td létrehozása
td4.innerHTML =  uralkodokArray[1].event1_2;//az uralkodokArray második elemének a tulajdonságának az értéke
tbody_tr2.appendChild(td4);//Hozzárakjuk a td-t a tbodyhoz


const td5 = document.createElement("td");//tr-en belüli td létrehozása
td5.innerHTML =  uralkodokArray[1].year1_2;//az uralkodokArray második elemének a tulajdonságának az értéke
tbody_tr2.appendChild(td5);//Hozzárakjuk a td-t a tbodyhoz


const tbody_tr3 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr3);;//Hozzárakom a tbody-hoz


const td6 = document.createElement("td");//tr-en belüli td létrehozása
td6.innerHTML =  uralkodokArray[2].ruler2;//az uralkodokArray harmadik elemének a tulajdonságának az értéke
tbody_tr3.appendChild(td6);//Hozzárakjuk a td-t a tbodyhoz


const td7 = document.createElement("td");//tr-en belüli td létrehozása
td7.innerHTML = uralkodokArray[2].event2;//az uralkodokArray harmadik elemének a tulajdonságának az értéke
tbody_tr3.appendChild(td7);//Hozzárakjuk a td-t a tbodyhoz


const td8 = document.createElement("td");//tr-en belüli td létrehozása
td8.innerHTML = uralkodokArray[2].year2;//az uralkodokArray harmadik elemének a tulajdonságának az értéke
tbody_tr3.appendChild(td8);//Hozzárakjuk a td-t a tbodyhoz


const tbody_tr4 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr4);;//Hozzárakom a tbody-hoz


const td9 = document.createElement("td");//tr-en belüli td létrehozása
td9.rowSpan = "2";//A mellette lévő cella egybeolvasztása
td9.innerHTML = uralkodokArray[3].ruler3;//az uralkodokArray negyedik elemének a tulajdonságának az értéke
tbody_tr4.appendChild(td9);//Hozzárakjuk a td-t a tbodyhoz


const td10 = document.createElement("td");//tr-en belüli td létrehozása
td10.innerHTML = uralkodokArray[3].event3;//az uralkodokArray negyedik elemének a tulajdonságának az értéke
tbody_tr4.appendChild(td10);//Hozzárakjuk a td-t a tbodyhoz


const td11 = document.createElement("td");//tr-en belüli td létrehozása
td11.innerHTML = uralkodokArray[3].year3;//az uralkodokArray negyedik elemének a tulajdonságának az értéke
tbody_tr4.appendChild(td11);//Hozzárakjuk a td-t a tbodyhoz

const tbody_tr5 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr5);;//Hozzárakom a tbody-hoz


const td12 = document.createElement("td");//tr-en belüli td létrehozása
td12.innerHTML = uralkodokArray[3].event3_2;//az uralkodokArray negyedik elemének a tulajdonságának az értéke
tbody_tr5.appendChild(td12);//Hozzárakjuk a td-t a tbodyhoz


const td13 = document.createElement("td");//tr-en belüli td létrehozása
td13.innerHTML = uralkodokArray[3].year3_2;//az uralkodokArray negyedik elemének a tulajdonságának az értéke
tbody_tr5.appendChild(td13);//Hozzárakjuk a td-t a tbodyhoz


const tbody_tr6 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr6);;//Hozzárakom a tbody-hoz


const td14 = document.createElement("td");//tr-en belüli td létrehozása
td14.rowSpan = "2";//A mellette lévő cella egybeolvasztása
td14.innerHTML = uralkodokArray[4].ruler4;//az uralkodokArray ötödik elemének a tulajdonságának az értéke
tbody_tr6.appendChild(td14);//Hozzárakjuk a td-t a tbodyhoz


const td15 = document.createElement("td");//tr-en belüli td létrehozása
td15.innerHTML = uralkodokArray[4].event4;//az uralkodokArray ötödik elemének a tulajdonságának az értéke
tbody_tr6.appendChild(td15);//Hozzárakjuk a td-t a tbodyhoz


const td16 = document.createElement("td");//tr-en belüli td létrehozása
td16.innerHTML = uralkodokArray[4].year4;//az uralkodokArray ötödik elemének a tulajdonságának az értéke
tbody_tr6.appendChild(td16);//Hozzárakjuk a td-t a tbodyhoz

const tbody_tr7 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr7);;//Hozzárakom a tbody-hoz


const td17 = document.createElement("td");//tr-en belüli td létrehozása
td17.innerHTML = uralkodokArray[4].event4_2;//az uralkodokArray ötödik elemének a tulajdonságának az értéke
tbody_tr7.appendChild(td17);//Hozzárakjuk a td-t a tbodyhoz


const td18 = document.createElement("td");//tr-en belüli td létrehozása
td18.innerHTML = uralkodokArray[4].year4_2;//az uralkodokArray ötödik elemének a tulajdonságának az értéke
tbody_tr7.appendChild(td18);//Hozzárakjuk a td-t a tbodyhoz
