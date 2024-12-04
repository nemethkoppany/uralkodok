
const table = document.createElement("table");
document.body.appendChild(table);

const colgroup = document.createElement("colgroup");
table.appendChild(colgroup);

const col1 = document.createElement("col");
col1.style.backgroundColor = "red";
colgroup.appendChild(col1);

const col2 = document.createElement("col");
colgroup.appendChild(col2);

const col3 = document.createElement("col");
col3.style.backgroundColor = "red";
colgroup.appendChild(col3);

const thead = document.createElement("thead");
table.appendChild(thead);

const thead_tr = document.createElement("tr");
thead.appendChild(thead_tr);

const th1 = document.createElement("th");
thead_tr.appendChild(th1);
th1.innerHTML = "Uralkodó";

const th2 = document.createElement("th");
thead_tr.appendChild(th2);
th2.innerHTML = "Esemény";

const th3 = document.createElement("th");
thead_tr.appendChild(th3);
th3.innerHTML = "Évszám";

const tbody = document.createElement("tbody");
table.appendChild(tbody);

// Első uralkodó: I. István
const tbody_tr1 = document.createElement("tr");
tbody.appendChild(tbody_tr1);

const td1 = document.createElement("td");
td1.rowSpan = "2";
td1.innerHTML = "I. István";
tbody_tr1.appendChild(td1);

const td2 = document.createElement("td");
td2.innerHTML = "Koronázás";
tbody_tr1.appendChild(td2);

const td3 = document.createElement("td");
td3.innerHTML = "1000";
tbody_tr1.appendChild(td3);

const tbody_tr2 = document.createElement("tr");
tbody.appendChild(tbody_tr2);

const td4 = document.createElement("td");
td4.innerHTML = "Pannonhalmi apátság megalapítása";
tbody_tr2.appendChild(td4);

const td5 = document.createElement("td");
td5.innerHTML = "1001";
tbody_tr2.appendChild(td5);

// Második uralkodó: IV. Béla
const tbody_tr3 = document.createElement("tr");
tbody.appendChild(tbody_tr3);

const td6 = document.createElement("td");
td6.innerHTML = "IV. Béla";
tbody_tr3.appendChild(td6);

const td7 = document.createElement("td");
td7.innerHTML = "tatárjárás";
tbody_tr3.appendChild(td7);

const td8 = document.createElement("td");
td8.innerHTML = "1241-1242";
tbody_tr3.appendChild(td8);

// Harmadik uralkodó: Mátyás király
const tbody_tr4 = document.createElement("tr");
tbody.appendChild(tbody_tr4);

const td9 = document.createElement("td");
td9.rowSpan = "2";
td9.innerHTML = "Mátyás király";
tbody_tr4.appendChild(td9);

const td10 = document.createElement("td");
td10.innerHTML = "Bécs elfoglalása";
tbody_tr4.appendChild(td10);

const td11 = document.createElement("td");
td11.innerHTML = "1485";
tbody_tr4.appendChild(td11);

const tbody_tr5 = document.createElement("tr");
tbody.appendChild(tbody_tr5);

const td12 = document.createElement("td");
td12.innerHTML = "Kenyérmezei csata";
tbody_tr5.appendChild(td12);

const td13 = document.createElement("td");
td13.innerHTML = "1479";
tbody_tr5.appendChild(td13);

// Negyedik uralkodó: II. Rákóczi Ferenc
const tbody_tr6 = document.createElement("tr");
tbody.appendChild(tbody_tr6);

const td14 = document.createElement("td");
td14.rowSpan = "2";
td14.innerHTML = "II. Rákóczi Ferenc";
tbody_tr6.appendChild(td14);

const td15 = document.createElement("td");
td15.innerHTML = "A szabadságharc kezdete";
tbody_tr6.appendChild(td15);

const td16 = document.createElement("td");
td16.innerHTML = "1703";
tbody_tr6.appendChild(td16);

const tbody_tr7 = document.createElement("tr");
tbody.appendChild(tbody_tr7);

const td17 = document.createElement("td");
td17.innerHTML = "A szabadságharc vége";
tbody_tr7.appendChild(td17);

const td18 = document.createElement("td");
td18.innerHTML = "1711";
tbody_tr7.appendChild(td18);
