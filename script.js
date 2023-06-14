//selection du bouton menu burger
const hamburgerButton = document.querySelector('.nav-toggler');
//selection de la nav du burger menu
const navigation = document.querySelector('.menu-burger');
//ajout d'un ecouteur avec un click sur le menu burger
hamburgerButton.addEventListener('click', toggleNav)
//action sur le active
function toggleNav(){
    hamburgerButton.classList.toggle('active')
    navigation.classList.toggle('active')
}

//----------------------------------
//----------------------------------
const btnKombucha1 = document.querySelector('.kombucha1');
const infoKombucha1 = document.querySelector('.detail-kombucha1');
if (btnKombucha1 != undefined){
    btnKombucha1.addEventListener('click', function() {
        infoKombucha1.style.display = 'flex';
    });
    document.addEventListener('click', function(event) {
        let elementClick = event.target;
        if (elementClick != btnKombucha1 && !infoKombucha1.contains(elementClick)){
            infoKombucha1.style.display = 'none';
        }
    });
}
// -------------------------------
const btnKombucha2 = document.querySelector('.kombucha2');
const infoKombucha2 = document.querySelector('.detail-kombucha2');
if (btnKombucha2 != undefined){

    btnKombucha2.addEventListener('click', function() {
        infoKombucha2.style.display = 'flex';
    });
    document.addEventListener('click', function(event) {
        let elementClick = event.target;
        if (elementClick != btnKombucha2 && !infoKombucha2.contains(elementClick)){
            infoKombucha2.style.display = 'none';
        }
    });
}
// --------------------------------
const btnKombucha3 = document.querySelector('.kombucha3');
const infoKombucha3 = document.querySelector('.detail-kombucha3');
if (btnKombucha3 != undefined){
    btnKombucha3.addEventListener('click', function() {
        infoKombucha3.style.display = 'flex';
    });
    document.addEventListener('click', function(event) {
        let elementClick = event.target;
        if (elementClick != btnKombucha3 && !infoKombucha3.contains(elementClick)){
            infoKombucha3.style.display = 'none';
        }
    });
}
//----------------------------------
const btnKombucha4 = document.querySelector('.kombucha4');
const infoKombucha4 = document.querySelector('.detail-kombucha4');
if (btnKombucha4 != undefined){
    btnKombucha4.addEventListener('click', function() {
        infoKombucha4.style.display = 'flex';
    });
    document.addEventListener('click', function(event) {
        let elementClick = event.target;
        if (elementClick != btnKombucha4 && !infoKombucha4.contains(elementClick)){
            infoKombucha4.style.display = 'none';
        }
    });
}
//----------------------------------
//----------------------------------
const btnPro = document.getElementById('pro');
const infoPro = document.getElementById('detail-pro');
if (btnPro != undefined){
    btnPro.addEventListener('click', function() {
      infoPro.style.display = 'flex';
    });
    document.addEventListener('click', function(event) {
      let elementClick = event.target;
      if (elementClick != btnPro && !infoPro.contains(elementClick)) {
        infoPro.style.display = 'none';
      }
    });
}
//----------------------------------
const btnTraieur = document.getElementById('traiteur');
const infoTraiteur = document.getElementById('detail-traiteur');
if (btnTraieur != undefined){
    btnTraieur.addEventListener('click', function() {
        infoTraiteur.style.display = 'flex';
    });
    document.addEventListener('click', function(event) {
        let elementClick = event.target;
        if (elementClick != btnTraieur && !infoTraiteur.contains(elementClick)){
            infoTraiteur.style.display = 'none';
        }
    });
}
//----------------------------------
const btnAteliers = document.getElementById('ateliers');
const infoAteliers = document.getElementById('detail-ateliers');
if (btnAteliers != undefined){
    btnAteliers.addEventListener('click', function() {
    
        infoAteliers.style.display = 'flex';
    });
    document.addEventListener('click', function(event) {
        let elementClick = event.target;
        if (elementClick != btnAteliers && !infoAteliers.contains(elementClick)){
            infoAteliers.style.display = 'none';
        }
    });
}

document.getElementById('formulaire-contact').addEventListener('submit', function(event) {
    event.preventDefault();

    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let status = document.getElementById('category').value;
    let subject = document.getElementById('sujet').value;
    let message = document.getElementById('message').value;
    let mail = document.getElementById('mail').value;
    
    var emailContent = "Je suis un " + status + "\n" + "\n";
    emailContent += nom + prenom + "\n" + "\n";
    emailContent += subject + "\n";
    emailContent += message + "\n" + "\n";
    emailContent += mail;

    let mailtoLink = "mailto:ola.zevounou@latelier-des-bulles.fr" + "?subject=" + encodeURIComponent("Nouveau message de contact") + "&body=" + encodeURIComponent(emailContent);

    window.location.href = mailtoLink;

});

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// import { getFirestore  } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyDpyV-WgfmuG-TvBwKbDRP-tT9BvAS3Fw4",
//     authDomain: "olabelbul-8bf6d.firebaseapp.com",
//     projectId: "olabelbul-8bf6d",
//     storageBucket: "olabelbul-8bf6d.appspot.com",
//     messagingSenderId: "83175455639",
//     appId: "1:83175455639:web:88d72d01bdefe01826a2d2"
// };

// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);
