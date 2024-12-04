
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

const headerRuler = "Uralkodó";//A cella értékétt kirendezzük egy változóba
const th1 = document.createElement("th");//tr-en belüli th létrehozása
thead_tr.appendChild(th1);//Hozzárakom a tr-hez
th1.innerHTML = headerRuler;//A th-n belüli érték az "Uralkodó"

const headerEvent = "Esemény";//A cella értékétt kirendezzük egy változóba
const th2 = document.createElement("th");//tr-en belüli th létrehozása
thead_tr.appendChild(th2);//Hozzárakom a tr-hez
th2.innerHTML = headerEvent;//A th-n belüli érték az "Esemény"

const headerYear = "Évszám";//A cella értékétt kirendezzük egy változóba
const th3 = document.createElement("th");//tr-en belüli th létrehozása
thead_tr.appendChild(th3);;//Hozzárakom a tr-hez
th3.innerHTML = "Évszám";//A th-n belüli érték az "Évszám"

const tbody = document.createElement("tbody");//Tbody elem létrehozása a tableön belül
table.appendChild(tbody);//Hozzáadom a table-höz


const tbody_tr1 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr1);//Hozzárakom a tbody-hoz

const tbodyRuler1 = "I. István";//A cella értékétt kirendezzük egy változóba
const td1 = document.createElement("td");//tr-en belüli td létrehozása
td1.rowSpan = "2";//A mellette lévő cella egybeolvasztása
td1.innerHTML = tbodyRuler1;//A td-n belüli  érték: "I. István" 
tbody_tr1.appendChild(td1);

const tbodyEvent1 = "Koronázás";//A cella értékétt kirendezzük egy változóba
const td2 = document.createElement("td");//tr-en belüli td létrehozása
td2.innerHTML = tbodyEvent1;//A td-n belüli  érték: "Koronázás" 
tbody_tr1.appendChild(td2);//Hozzárakjuk a td-t a tbodyhoz

const tbodyYear1 = "1000";//A cella értékétt kirendezzük egy változóba
const td3 = document.createElement("td");//tr-en belüli td létrehozása
td3.innerHTML = tbodyYear1;//A td-n belüli  érték: "1000" 
tbody_tr1.appendChild(td3);//Hozzárakjuk a td-t a tbodyhoz

const tbody_tr2 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr2);//Hozzárakjuk a td-t a tbodyhoz

const tbodyEvent1_2 = "Pannonhalmi apátság megalapítása"//A cella értékétt kirendezzük egy változóba
const td4 = document.createElement("td");//tr-en belüli td létrehozása
td4.innerHTML = tbodyEvent1_2;//A td-n belüli  érték: "Pannonhalmi apátság megalapítás" 
tbody_tr2.appendChild(td4);//Hozzárakjuk a td-t a tbodyhoz

const tbodyYear1_2 = "1001"//A cella értékétt kirendezzük egy változóba
const td5 = document.createElement("td");//tr-en belüli td létrehozása
td5.innerHTML = tbodyYear1_2;//A td-n belüli  érték: "1001" 
tbody_tr2.appendChild(td5);//Hozzárakjuk a td-t a tbodyhoz


const tbody_tr3 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr3);;//Hozzárakom a tbody-hoz

const tbodyRuler2 = "IV. Béla";//A cella értékétt kirendezzük egy változóba
const td6 = document.createElement("td");//tr-en belüli td létrehozása
td6.innerHTML = tbodyRuler2;//A td-n belüli  érték: "IV. Béla" 
tbody_tr3.appendChild(td6);//Hozzárakjuk a td-t a tbodyhoz

const tbodyEvent2 = "Tatárjárás";//A cella értékétt kirendezzük egy változóba
const td7 = document.createElement("td");//tr-en belüli td létrehozása
td7.innerHTML = tbodyEvent2;//A td-n belüli  érték: "Tatárjárás" 
tbody_tr3.appendChild(td7);//Hozzárakjuk a td-t a tbodyhoz

const tbodyYear2 = "1241-1242";//A cella értékétt kirendezzük egy változóba
const td8 = document.createElement("td");//tr-en belüli td létrehozása
td8.innerHTML = tbodyYear2;//A td-n belüli  érték: "1241-1242" 
tbody_tr3.appendChild(td8);//Hozzárakjuk a td-t a tbodyhoz


const tbody_tr4 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr4);;//Hozzárakom a tbody-hoz

const tbodyRuler3 = "Mátyás király"//A cella értékétt kirendezzük egy változóba
const td9 = document.createElement("td");//tr-en belüli td létrehozása
td9.rowSpan = "2";//A mellette lévő cella egybeolvasztása
td9.innerHTML = tbodyRuler3;//A td-n belüli  érték: "Mátyás király" 
tbody_tr4.appendChild(td9);//Hozzárakjuk a td-t a tbodyhoz

const tbodyEvent3 = "Bécs elfoglalása";//A cella értékétt kirendezzük egy változóba
const td10 = document.createElement("td");//tr-en belüli td létrehozása
td10.innerHTML = tbodyEvent3;//A td-n belüli  érték: "Bécs elfoglalása" 
tbody_tr4.appendChild(td10);//Hozzárakjuk a td-t a tbodyhoz

const tbodyYear3 = "1485"//A cella értékétt kirendezzük egy változóba
const td11 = document.createElement("td");//tr-en belüli td létrehozása
td11.innerHTML = tbodyYear3;//A td-n belüli  érték: "1485" 
tbody_tr4.appendChild(td11);//Hozzárakjuk a td-t a tbodyhoz

const tbody_tr5 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr5);;//Hozzárakom a tbody-hoz

const tbodyEvent3_2 = "Kenyérmezei csata"//A cella értékétt kirendezzük egy változóba
const td12 = document.createElement("td");//tr-en belüli td létrehozása
td12.innerHTML = tbodyEvent3_2;//A td-n belüli  érték: "Kenyérmezei csata" 
tbody_tr5.appendChild(td12);//Hozzárakjuk a td-t a tbodyhoz

const tbodyYear3_2 = "1479";//A cella értékétt kirendezzük egy változóba
const td13 = document.createElement("td");//tr-en belüli td létrehozása
td13.innerHTML = tbodyYear3_2;//A td-n belüli  érték: "1479" 
tbody_tr5.appendChild(td13);//Hozzárakjuk a td-t a tbodyhoz


const tbody_tr6 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr6);;//Hozzárakom a tbody-hoz

const tbodyRuler4 = "II. Rákóczi Ferenc"//A cella értékétt kirendezzük egy változóba
const td14 = document.createElement("td");//tr-en belüli td létrehozása
td14.rowSpan = "2";//A mellette lévő cella egybeolvasztása
td14.innerHTML = tbodyRuler4;//A td-n belüli  érték: "II. Rákóczi Ferenc" 
tbody_tr6.appendChild(td14);//Hozzárakjuk a td-t a tbodyhoz

const tbodyEvent4 = "A szabadságharc kezdete";//A cella értékétt kirendezzük egy változóba
const td15 = document.createElement("td");//tr-en belüli td létrehozása
td15.innerHTML = tbodyEvent4;//A td-n belüli  érték: "A szabadságharc kezdete" 
tbody_tr6.appendChild(td15);//Hozzárakjuk a td-t a tbodyhoz

const tbodyYear4 = "1703"//A cella értékétt kirendezzük egy változóba
const td16 = document.createElement("td");//tr-en belüli td létrehozása
td16.innerHTML = tbodyYear4;//A td-n belüli  érték: "1703" 
tbody_tr6.appendChild(td16);//Hozzárakjuk a td-t a tbodyhoz

const tbody_tr7 = document.createElement("tr");//Tbodyn belüli tr létrehozása
tbody.appendChild(tbody_tr7);;//Hozzárakom a tbody-hoz

const tbodyEvent4_2 = "A szabadságharc vége";//A cella értékétt kirendezzük egy változóba
const td17 = document.createElement("td");//tr-en belüli td létrehozása
td17.innerHTML = tbodyEvent4_2;//A td-n belüli  érték: "A szabadságharc vége" 
tbody_tr7.appendChild(td17);//Hozzárakjuk a td-t a tbodyhoz

const tbodyYear4_2 = "1711";//A cella értékétt kirendezzük egy változóba
const td18 = document.createElement("td");//tr-en belüli td létrehozása
td18.innerHTML = tbodyYear4_2;//A td-n belüli  érték: "1711" 
tbody_tr7.appendChild(td18);//Hozzárakjuk a td-t a tbodyhoz
