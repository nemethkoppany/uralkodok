const headerObject = {
    headerRuler: "Uralkodó",
    headerEvent: "Esemény",
    headerYear: "Évszám"
};

const tbody1 = {
    ruler1: "I. István",
    event1: "Koronázás",
    year1: "1000",
    event1_2:"Pannnhalmi apátság megalapítása",
    year1_2:"1001"
}

const tbody2 = {
    ruler2: "IV. Béla",
    event2:"Tatárjárás",
    year2:"1241-1242",
}

const tbody3 = {
    ruler3: "Mátyás király",
    event3:"Bécs elfoglalása",
    year3: "1485",
    event3_2: "Kenyármezei csata",
    year3_2: "1479",
}

const tbody4 = {
    ruler4: "II: Rákóczi Ferenc",
    event4:"A szabadságharc kezdete",
    year4:"1703",
    event4_2: "A szabadságharc vége",
    year4_2: "1711",
}

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
th1.innerHTML = headerObject.headerRuler;//headerObject tulajdonsága


const th2 = document.createElement("th");//tr-en belüli th létrehozása
thead_tr.appendChild(th2);//Hozzárakom a tr-hez
th2.innerHTML = headerObject.headerEvent;//headerObject tulajdonsága


const th3 = document.createElement("th");//tr-en belüli th létrehozása
thead_tr.appendChild(th3);;//Hozzárakom a tr-hez
th3.innerHTML = headerObject.headerYear;//headerObject tulajdonsága

const tbody = document.createElement("tbody");//Tbody elem létrehozása a tableön belül
table.appendChild(tbody);//Hozzáadom a table-höz


const tbody_tr1 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr1);//Hozzárakom a tbody-hoz


const td1 = document.createElement("td");//tr-en belüli td létrehozása
td1.rowSpan = "2";//A mellette lévő cella egybeolvasztása
td1.innerHTML = tbody1.ruler1;//A tbody1 objektum tulajdonsága
tbody_tr1.appendChild(td1);


const td2 = document.createElement("td");//tr-en belüli td létrehozása
td2.innerHTML = tbody1.event1;//A tbody1 objektum tulajdonsága
tbody_tr1.appendChild(td2);//Hozzárakjuk a td-t a tbodyhoz


const td3 = document.createElement("td");//tr-en belüli td létrehozása
td3.innerHTML = tbody1.year1;//A tbody1 objektum tulajdonsága
tbody_tr1.appendChild(td3);//Hozzárakjuk a td-t a tbodyhoz

const tbody_tr2 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr2);//Hozzárakjuk a td-t a tbodyhoz


const td4 = document.createElement("td");//tr-en belüli td létrehozása
td4.innerHTML = tbody1.event1_2;//A tbody1 objektum tulajdonsága
tbody_tr2.appendChild(td4);//Hozzárakjuk a td-t a tbodyhoz


const td5 = document.createElement("td");//tr-en belüli td létrehozása
td5.innerHTML = tbody1.year1_2;//A tbody1 objektum tulajdonsága
tbody_tr2.appendChild(td5);//Hozzárakjuk a td-t a tbodyhoz


const tbody_tr3 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr3);;//Hozzárakom a tbody-hoz


const td6 = document.createElement("td");//tr-en belüli td létrehozása
td6.innerHTML = tbody2.ruler2;//A tbody2 objektum tulajdonsága
tbody_tr3.appendChild(td6);//Hozzárakjuk a td-t a tbodyhoz


const td7 = document.createElement("td");//tr-en belüli td létrehozása
td7.innerHTML = tbody2.event2;//A tbody2 objektum tulajdonsága
tbody_tr3.appendChild(td7);//Hozzárakjuk a td-t a tbodyhoz


const td8 = document.createElement("td");//tr-en belüli td létrehozása
td8.innerHTML = tbody2.year2;//A tbody2 objektum tulajdonsága
tbody_tr3.appendChild(td8);//Hozzárakjuk a td-t a tbodyhoz


const tbody_tr4 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr4);;//Hozzárakom a tbody-hoz


const td9 = document.createElement("td");//tr-en belüli td létrehozása
td9.rowSpan = "2";//A mellette lévő cella egybeolvasztása
td9.innerHTML = tbody3.ruler3;//A tbody3 objektum tulajdonsága
tbody_tr4.appendChild(td9);//Hozzárakjuk a td-t a tbodyhoz


const td10 = document.createElement("td");//tr-en belüli td létrehozása
td10.innerHTML = tbody3.event3;//A tbody3 objektum tulajdonsága
tbody_tr4.appendChild(td10);//Hozzárakjuk a td-t a tbodyhoz


const td11 = document.createElement("td");//tr-en belüli td létrehozása
td11.innerHTML = tbody3.year3;//A tbody3 objektum tulajdonsága
tbody_tr4.appendChild(td11);//Hozzárakjuk a td-t a tbodyhoz

const tbody_tr5 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr5);;//Hozzárakom a tbody-hoz


const td12 = document.createElement("td");//tr-en belüli td létrehozása
td12.innerHTML = tbody3.event3_2;//A tbody3 objektum tulajdonsága
tbody_tr5.appendChild(td12);//Hozzárakjuk a td-t a tbodyhoz


const td13 = document.createElement("td");//tr-en belüli td létrehozása
td13.innerHTML = tbody3.year3_2;//A tbody3 objektum tulajdonsága
tbody_tr5.appendChild(td13);//Hozzárakjuk a td-t a tbodyhoz


const tbody_tr6 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr6);;//Hozzárakom a tbody-hoz


const td14 = document.createElement("td");//tr-en belüli td létrehozása
td14.rowSpan = "2";//A mellette lévő cella egybeolvasztása
td14.innerHTML = tbody4.ruler4;//A tbody4 objektum tulajdonsága
tbody_tr6.appendChild(td14);//Hozzárakjuk a td-t a tbodyhoz


const td15 = document.createElement("td");//tr-en belüli td létrehozása
td15.innerHTML = tbody4.event4;//A tbody4 objektum tulajdonsága
tbody_tr6.appendChild(td15);//Hozzárakjuk a td-t a tbodyhoz


const td16 = document.createElement("td");//tr-en belüli td létrehozása
td16.innerHTML = tbody4.year4;//A tbody4 objektum tulajdonsága
tbody_tr6.appendChild(td16);//Hozzárakjuk a td-t a tbodyhoz

const tbody_tr7 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr7);;//Hozzárakom a tbody-hoz


const td17 = document.createElement("td");//tr-en belüli td létrehozása
td17.innerHTML = tbody4.event4_2;//A tbody4 objektum tulajdonsága
tbody_tr7.appendChild(td17);//Hozzárakjuk a td-t a tbodyhoz


const td18 = document.createElement("td");//tr-en belüli td létrehozása
td18.innerHTML = tbody4.year4_2;//A tbody4 objektum tulajdonsága
tbody_tr7.appendChild(td18);//Hozzárakjuk a td-t a tbodyhoz
