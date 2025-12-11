//PREPARAZIONE

//andiamo a dichiarare tutti i campi input
const nameUserField = document.getElementById("nameUserField");

const ageUserField = document.getElementById("ageUserField");

const KmUserField = document.getElementById("KmUserField");

const buttonUser = document.getElementById("buttonUser");

//andiamo a dichiarare le varibili di oputput

const nameUser = document.getElementById("nameUser");

const ageUser = document.getElementById("ageUser");

const KmUser = document.getElementById("kmUser");

const priceUser = document.getElementById("priceUser");


// dichiariamo il form di riferiemtno 

const form = document.querySelector(".formContainer")


//AVVIO

form.addEventListener("submit", (event) => {
    //facciamo in modo che il form non agisca da form e resetti la pagina all'invio dei dati 
    event.preventDefault();
    //mettiamo a schermo il nome dell'utente
    nameUser.innerText = nameUserField.value;
    //mettiamo a schermo la fascia di età dell'utente
    ageUser.innerText = ageUserField.value;
    //mettiamo a schermo i km che l'utente vuole percorrere
    KmUser.innerText = KmUserField.value;

})