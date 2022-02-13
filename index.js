
burger = document.querySelector(`.burger`)
navbar = document.querySelector(`.navbar`)
navList = document.querySelector(`.nav-list`)


burger.addEventListener(`click`, ()=>{
    navList.classList.toggle(`v-class-resp`);
    navbar.classList.toggle(`h-nav-resp`);
    
    })



    var preloader = document.getElementById('loading');
    function load(){
        preloader.style.display = 'none';
    }