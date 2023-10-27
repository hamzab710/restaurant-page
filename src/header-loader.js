export default function loadHeader() {
    const content = document.getElementById('content');
    content.textContent = "";

    const header = document.createElement('header');
    content.appendChild(header);

    const h1 = document.createElement('h1');
    h1.textContent = 'Barbecue House';
    header.appendChild(h1);

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    header.appendChild(buttons);

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('home-button');
    buttons.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.classList.add('menu-button');
    buttons.appendChild(menuButton);

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.classList.add('contact-button');
    buttons.appendChild(contactButton);
}