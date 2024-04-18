document.getElementById("cerrar").addEventListener('click', ()=>{
    document.cookie = 'jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.location.href = "/"
})

// MENU
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// MOSTRAR EL MENU
navToggle.addEventListener('click', ()=>{
    navMenu.classList.add('show-menu')
});

//ESCONDER EL MENU
navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
});