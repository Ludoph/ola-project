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