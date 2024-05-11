function menuShow(){
    let menuMobile = document.querySelector('.mobileMenu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').getElementsByClassName('mobileMenuIcon')
     } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').getElementsByClassName('mobileMenuIcon')
    }
}






