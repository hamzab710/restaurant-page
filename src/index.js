import header from './header-loader';
import home from './home-loader';
import menu from './menu-loader'
import contact from './contact-loader';
import footer from './footer-loader';

function init() {
    header();
    home();
    footer();
    makeButtonsWork();
}

function makeButtonsWork() {
    const homeButton = document.querySelector('.home-button');
    homeButton.addEventListener('click' , () => {
        header();
        home();
        footer();
        makeButtonsWork();
    })

    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click' , () => {
        header();
        menu();
        footer();
        makeButtonsWork();
    })

    const contactButton = document.querySelector('.contact-button');
    contactButton.addEventListener('click' , () => {
        header();
        contact();
        footer();
        makeButtonsWork();
    })
}

init();