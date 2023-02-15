burger = document.querySelector('.burger');
signIn = document.querySelector('.sign-in');
navList = document.querySelector('.nav-list');
navbar = document.querySelector('.navbar');
namesite = document.querySelector('.name-sm')

burger.addEventListener('click', ()=>{
    signIn.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('navbar')
    namesite.classList.toggle('visi');
})
