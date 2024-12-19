


/**
 * Fejléc generálás
Készít egy új sort(tr) amiben el lesznek helyezve a cellák(th)
Utána végigmegy a headObj objektumon 
A for cikluson belül elkészíti a cellákat
Melyeknek megadja az értéket: Az Uralkodó, Esemény, Évszám
És ezt hozzáadja a sorhoz
 */
function headerGenerate(){//Új függvény amely a fejlécet generálja le
    const tr = document.createElement("tr");//Új sor létrehozása a theadben
    thead.appendChild(tr);//A tr hozzácsatolása a thead-hez

    for(const head of Object.values(headerObj)){//Végigmegyünk a head-el a headObj nevű Objektumon 
        const th = document.createElement("th");//th elem létrehozása
        th.innerHTML = head;//A th elem belsejében lesz a head (Ami itt az Uralkodó, Esemény és Évszám)
        tr.appendChild(th);//A tr-hez hozzácsatoljuk a th-t
    }
   
}

/**
 * 
 * A táblázat generálása
Létrehozunk egy sort(tr) melybe belerakunk három td elemet amelyebe belerakjuk az array-ből kiszedett tulajdonságoknak az értékeit
Ezután csinálunk egy elágazást amely megnézi, hogy a második esemény és évszám cellában van e valami
Ha van akkor legenerálja azokat is 
 * @param {array} array //A típus megadása
 */

function renderTable(array){//Új függvény definiálása és egy paraméter
    for(const Currentelement of array){//Bejárjuk az array paramétert-t a Currentelement-tel
    
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

/**
 *   Űrlap generálás függvény
  deklarálunk egy form-ot amit hozzárakunk a body-hoz és adunk neki egy form id-t
  Ezután hozzárendeljük a formhoz az egyes rublikákat
  És készítünk egy gombot melynek megadjuk a típusát, a szöveget ami rajta lesz a gombon és azt hozzárendeljük a form-hoz
 */
function createForm(){//Új form generálós függvény
    let form = document.createElement('form');//Form elem létrehozása
    document.body.appendChild(form);//Hozzárakjuk a body-hoz
    form.id = 'form';//Adunk neki id-t
 
    form.appendChild(//A form-hoz hozzárakjuk:
        createInputInDiv(form, 'text', 'Második esemény évszáma:', 'evszam2'),//rublikageneráló függvény meghívása  és paramétereinek megadása
        createInputInDiv(form, 'text', 'Uralkodó neve:', 'uralkodo_nev'),//rublikageneráló függvény meghívása és paramétereinek megadása
        createInputInDiv(form, 'text', 'Első esemény:', 'esemeny1'),//rublikageneráló függvény meghívása és paramétereinek megadása
        createInputInDiv(form, 'text', 'Első esemény évszáma:', 'evszam1'),//rublikageneráló függvény meghívása és paramétereinek megadása
        createInputInDiv(form, 'text', 'Második esemény:', 'esemeny2'), //rublikageneráló függvény meghívása és paramétereinek megadása
    )
 
    let button = document.createElement('button');//Gomb létrehozádsa
    button.type = 'submit';//Típus megadása, azaz "beadás"
    button.innerText = 'Hozzáadás';//Ez lesz a gombra ráírva
    form.appendChild(button);//Hozzárendeljük a form-hoz
 }

 /**
  *  Rublikák létrehozása
 Minden rublika egy divben lesz benne és lesz egy label-je és egy input mezője, ezen kívül egy külön divben(de még mindig az eredeti div-en belül lesz egy másik div aminek csak egy error class-t megadunk)
 Megcsináljuk a nagy divet és annak adunk egy class-t
 utána a labelt-t aminek megadjuk a for-át és az értékét
 Majd utána elkészítjük az input mezőt amibe mi írhatunk majd
 És végül még a divet aminek adunk egy error class-t
 Ezután csak belepakolunk mindent a div-be és néha adunk egy-két sortörést
 És meghívjuk a függvényt
  * @param {HTMLElement} parent //A típus megadása
  * @param {String} type //A típus megadása
  * @param {String} text //A típus megadása
  * @param {String} nameAndId //A típus megadása
  * @returns 
  */

 function createInputInDiv(parent, type, text, nameAndId){//Függvény deklarálása bemeneti értékekkel
    let div = document.createElement('div');//div elem létrehozása
    div.className = 'field';//Adunk neki egy class-t
 
    let label = document.createElement('label');//Label elem létrehozása
    label.htmlFor = nameAndId;//A for a ugyan az lesz mint a name és az id
    label.innerText = text;//A labelnek pedig az lesz amit mi is látunk(pl.: Uralkodó neve:)
 
    let input = document.createElement('input');//Input elem létrehozása
    input.type = type;//Típusa: form
    input.name = nameAndId;//A name az hasonló a for-hoz
    input.id = nameAndId;//Adunk neki egy id-t 
 
    let err = document.createElement('div');//Egy másik div létrehozása
    err.classList.add('error');//Adunk neki egy class-t aminek az a neve, hogy error
 
    parent.appendChild(div);//Azt a divet amihez hozzárakunk majd mindent hozzárakjuk a parenthez
    div.appendChild(label);//Hozzáadjuk a divhez
    div.appendChild(document.createElement('br'));//Hozzáadjuk a divhez  //sortörések
    div.appendChild(input);//Hozzáadjuk a divhez
    div.appendChild(document.createElement('br'));//Hozzáadjuk a divhez //sortörések
    div.appendChild(document.createElement('br'));//Hozzáadjuk a divhez //sortörések
    div.appendChild(err);//Hozzáadjuk a divhez
 
    return div;//Visszatérés div-vel
 }
 createForm();//A függvény meghívása





/**
 * 
 * A második esemény és év validációja
Ha a második eseménybe van valami írva de a második évszámba nincs vagy fordítva
Akkor hívja meg a validateFormHtmlField függvényt és írja ki a megfelelő helyre a hibaüzenetet
És legeyne a valid értéke hamis
És térjen vissza egy bool típusú értékkel
 * @param {HTMLElement} event2Input //A típus megadása
 * @param {HTMLElement} year2Input //A típus megadása
 * @returns 
 */

function masodikAdatokValidacio( event2Input, year2Input){//Új függvény amely a  második eseményt és annak évszámát kezeli
    let valid = true;//A valid értéke alapértelmezetten true 
    if ((event2Input.value && !year2Input.value) || (!event2Input.value && year2Input.value)) {//Ha a második eseménybe van valami írva de a második évszámba nincs vagy fordítva
        if(!event2Input.value ){//Ha a második eseménybe nincs semmi írva(ez csak azért van még egy if-ben mert  ezt így jobban értem)
            validateFormHtmlField(event2Input, "Minden évszámhoz kell tartoznia eseménynek!");//Akkor írjon ki egy hibaüzenetet
        }
        if(!year2Input.value ){//Ha a második évszámhoz nincs semmi írva(ez csak azért van még egy if-ben mert  ezt így jobban értem)
            validateFormHtmlField(year2Input, "Minden eseményhez kell tartoznia évszámnak!");//Akkor írjon ki egy hibaüzenetet
        }
        valid = false;//A valid értéke át let rakva false-ra
    }
    return valid;//Térjen vissza a változóval
}


/**
 * 
 * A táblázat többi részének validálása
Ha bármelyik rublika üres, akkor dobjon ki a megfelelő helyre egy hibaüzenetet
És legyen a valid értéke hamis
 * @param {HTMLElement} rulerInput //A típus megadása
 * @param {HTMLElement} eventInput //A típus megadása
 * @param {HTMLElement} yearInput //A típus megadása
 * @returns 
 */

function simpleValidation(rulerInput,eventInput,yearInput,){//Új függvény definiálása melynek bemeneti értékei: rulerInput,eventInput,yearInput, event2Input, year2Input
    let valid = true;//A valid alapértelmezett értéke true;

    if(!validateFormHtmlField(rulerInput, "Az uralkodó megadása kötelező!")){//Ha a validateFormHtmlField !== true azaz nincs semmi írva az adott cellába akkor kiírja  a hibaüzenetet
        valid = false;//És a valid értékét átrakja hamisra
    }

    if(!validateFormHtmlField(eventInput, "Az esemény megadása kötelező!")){//Ha a validateFormHtmlField !== true azaz nincs semmi írva az adott cellába akkor kiírja  a hibaüzenetet
        valid = false;//És a valid értékét átrakja hamisra
    }

    if(!validateFormHtmlField(yearInput, "Az évszám megadása kötelező!")){//Ha a validateFormHtmlField !== true azaz nincs semmi írva az adott cellába akkor kiírja  a hibaüzenetet
        valid = false;//És a valid értékét átrakja hamisra
    }

   
    return valid;//Térjen vissza a változóval
}
/**
 * A validateFormHtmlField függvény a html mezők validálására
Ha a mező üres, akkor kiírja a hibaüzenetet 
Ha a mező nem üres, akkor térjen vissza true-val
 * @param {HTMLElement} inputHtmlElement //A típus megadása
 * @param {String} errormessage //A típus megadása
 * @returns 
 */

function validateFormHtmlField(inputHtmlElement, errormessage){//Új függvény melynek van két bemeneti értéke
    let valid = true;//Alapértelmezetten a weboldal-ban nincs hiba, azaz az érték true
    if(inputHtmlElement.value.trim()  === ""){//Ha a bemeneti mezőben nincs semmi
        const parentElement = inputHtmlElement.parentElement;//eltároljuk egy változóban a beviteli mező parentelementjét, itt ez a field(mert ebben a divben van)
        const errorPlace = parentElement.querySelector(".error");// Megkeresi a parentElementben  az error classal rendelkező elemet 
        if(errorPlace != undefined){//Ha ez az elem létezik
            errorPlace.innerHTML = errormessage;//Akkor megadunk neki egy hibaüzenetet
        }
        valid = false;//És van hiba a weboldalon/űrlapon, tehát megbukott a validáción
    }
    return valid;//Visszatérünk a validdal, true ha átment a validáción, false ha nem
}
