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

//BARRA DE BUSQUEDA
const search = document.getElementById('search'),
      searchbtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close');

//MOSTRAR
searchbtn.addEventListener('click', ()=>{
    search.classList.add('show-search')
})

//ESCONDER
searchClose.addEventListener('click', ()=>{
    search.classList.remove('show-search')
})

//LOGIN
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close');

//MOSTRAR
loginBtn.addEventListener('click', ()=>{
    login.classList.add('show-login')
})

//ESCONDER
loginClose.addEventListener('click', ()=>{
    login.classList.remove('show-login')
})

//BUSCADOR
