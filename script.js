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
btnKombucha1.addEventListener('click', () =>{
    if(infoKombucha1.style.display == 'flex'){
        infoKombucha1.style.display = 'none';
    } else {
        infoKombucha1.style.display = 'flex';
    }
});

const btnKombucha2 = document.querySelector('.kombucha2');
const infoKombucha2 = document.querySelector('.detail-kombucha2');
btnKombucha2.addEventListener('click', () =>{
    if(infoKombucha2.style.display == 'flex'){
        infoKombucha2.style.display = 'none';
    } else {
        infoKombucha2.style.display = 'flex';
    }
});

const btnKombucha3 = document.querySelector('.kombucha3');
const infoKombucha3 = document.querySelector('.detail-kombucha3');
btnKombucha3.addEventListener('click', () =>{
    if(infoKombucha3.style.display == 'flex'){
        infoKombucha3.style.display = 'none';
    } else {
        infoKombucha3.style.display = 'flex';
    }
});

const btnKombucha4 = document.querySelector('.kombucha4');
const infoKombucha4 = document.querySelector('.detail-kombucha4');
btnKombucha4.addEventListener('click', () =>{
    if(infoKombucha4.style.display == 'flex'){
        infoKombucha4.style.display = 'none';
    } else {
        infoKombucha4.style.display = 'flex';
    }
});


