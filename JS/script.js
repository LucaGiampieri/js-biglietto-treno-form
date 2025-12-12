//PREPARAZIONE

//andiamo a dichiarare tutti i campi input
const nameUserField = document.getElementById("nameUserField");

const ageUserField = document.getElementById("ageUserField");

const KmUserField = document.getElementById("KmUserField");

const deletebuttonUser = document.getElementById("deleteButton");

//andiamo a dichiarare le varibili di oputput

const nameUser = document.getElementById("nameUser");

const ageUser = document.getElementById("ageUser");

const KmUser = document.getElementById("kmUser");

const priceUser = document.getElementById("priceUser");


//dichiariamo il form di riferiemtno 

const form = document.querySelector(".formContainer")

//dichiaro la la sezione da fa comparire quando si preme invio 

const oputputSection = document.querySelector(".outputContainer")

//AVVIO

//attiviamo il tasto invia
form.addEventListener("submit", (event) => {
    //facciamo in modo che il form non agisca da form e resetti la pagina all'invio dei dati 
    event.preventDefault();
    //mettiamo a schermo il nome dell'utente
    nameUser.innerText = nameUserField.value;
    //mettiamo a schermo la fascia di età dell'utente
    ageUser.innerText = ageUserField.value;
    //mettiamo a schermo i km che l'utente vuole percorrere
    KmUser.innerText = KmUserField.value;
    //creo una varibile in cui salvare i km come numero
    let km = parseInt(KmUserField.value);
    //faccio il conto parziale del prezzo
    let partialPrice = km * 0.21;
    //creo un variabile che andrà a contenere il prezzo finale
    let finalPrice;
    //faccio fare i conti se il l'utente è minorenne
    if (ageUserField.value === "Ridotto: minorenne") {
        finalPrice = (partialPrice - (partialPrice / 100 * 20)).toFixed(2)
        //faccio fare i conti se l'utente è over 65    
    } else if (ageUserField.value === "Ridotto: over 65") {
        finalPrice = (partialPrice - (partialPrice / 100 * 40)).toFixed(2);
        //faccio fare il conto se l'utente è maggiorenne ma under 65    
    } else {
        finalPrice = (partialPrice).toFixed(2);
    }
    //mettiamo a schermo il prezzo finale
    priceUser.innerText = finalPrice + " \u20AC";
    //facciamo comparire la sezione di outpout
    oputputSection.classList.remove("displayNone")
    // pulisco i campi del form dopo l'invio
    form.reset();
})

//attiviamo il tasto annulla
deletebuttonUser.addEventListener("click", () => oputputSection.classList.add("displayNone"))




