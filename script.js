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



const btnKombucha1 = document.querySelector('.kombucha1');
const infoKombucha1 = document.querySelector('.detail-kombucha1');
btnKombucha1.addEventListener('click', function() {
    infoKombucha1.style.display = 'flex';
});
document.addEventListener('click', function(event) {
    let elementClick = event.target;
    if (elementClick != btnKombucha1 && !infoKombucha1.contains(elementClick)){
        infoKombucha1.style.display = 'none';
    }
});
// -------------------------------
const btnKombucha2 = document.querySelector('.kombucha2');
const infoKombucha2 = document.querySelector('.detail-kombucha2');
btnKombucha2.addEventListener('click', function() {
    infoKombucha2.style.display = 'flex';
});
document.addEventListener('click', function(event) {
    let elementClick = event.target;
    if (elementClick != btnKombucha2 && !infoKombucha2.contains(elementClick)){
        infoKombucha2.style.display = 'none';
    }
});
// --------------------------------

const btnKombucha3 = document.querySelector('.kombucha3');
const infoKombucha3 = document.querySelector('.detail-kombucha3');
btnKombucha3.addEventListener('click', function() {
    infoKombucha3.style.display = 'flex';
});
document.addEventListener('click', function(event) {
    let elementClick = event.target;
    if (elementClick != btnKombucha3 && !infoKombucha3.contains(elementClick)){
        infoKombucha3.style.display = 'none';
    }
});

//----------------------------------
const btnKombucha4 = document.querySelector('.kombucha4');
const infoKombucha4 = document.querySelector('.detail-kombucha4');
btnKombucha4.addEventListener('click', function() {
    infoKombucha4.style.display = 'flex';
});
document.addEventListener('click', function(event) {
    let elementClick = event.target;
    if (elementClick != btnKombucha4 && !infoKombucha4.contains(elementClick)){
        infoKombucha4.style.display = 'none';
    }
});


