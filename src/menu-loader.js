export default function loadMenu() {
    const content = document.getElementById('content');

    const menu = document.createElement('div');
    menu.id = 'menu';
    content.appendChild(menu);

    const groundBeef = document.createElement('div');
    menu.appendChild(groundBeef);

    const groundBeefHeader = document.createElement('h3');
    groundBeefHeader.textContent = 'Ground Beef BBQ';
    groundBeef.appendChild(groundBeefHeader);

    const groundBeefQuantity = document.createElement('p');
    groundBeefQuantity.textContent = '1 KG';
    groundBeef.appendChild(groundBeefQuantity);

    const groundBeefPrice = document.createElement('p');
    groundBeefPrice.textContent = '180 DH';
    groundBeef.appendChild(groundBeefPrice);

    const groundBeefImage = document.createElement('img');
    groundBeefImage.src = './images/groundbeef.jpg';
    groundBeef.appendChild(groundBeefImage);

    const chicken = document.createElement('div');
    menu.appendChild(chicken);

    const chickenHeader = document.createElement('h3');
    chickenHeader.textContent = 'Rotisserie Chicken';
    chicken.appendChild(chickenHeader);

    const chickenQuantity = document.createElement('p');
    chickenQuantity.textContent = 'Half a chicken';
    chicken.appendChild(chickenQuantity);

    const chickenPrice = document.createElement('p');
    chickenPrice.textContent = '50 DH';
    chicken.appendChild(chickenPrice);

    const chickenImage = document.createElement('img');
    chickenImage.src = './images/chicken.jpg';
    chicken.appendChild(chickenImage);

    const ribs = document.createElement('div');
    menu.appendChild(ribs);

    const ribsHeader = document.createElement('h3');
    ribsHeader.textContent = 'Baby Back Ribs';
    ribs.appendChild(ribsHeader);

    const ribsQuantity = document.createElement('p');
    ribsQuantity.textContent = '5 Pieces';
    ribs.appendChild(ribsQuantity);

    const ribsPrice = document.createElement('p');
    ribsPrice.textContent = '250 DH';
    ribs.appendChild(ribsPrice);

    const ribsImage = document.createElement('img');
    ribsImage.src = './images/ribs.jpg';
    ribs.appendChild(ribsImage);

    const steak = document.createElement('div');
    menu.appendChild(steak);

    const steakHeader = document.createElement('h3');
    steakHeader.textContent = 'Steak';
    steak.appendChild(steakHeader);

    const steakQuantity = document.createElement('p');
    steakQuantity.textContent = '1 KG';
    steak.appendChild(steakQuantity);

    const steakPrice = document.createElement('p');
    steakPrice.textContent = '200 DH';
    steak.appendChild(steakPrice);

    const steakImage = document.createElement('img');
    steakImage.src = './images/steak.jpg';
    steak.appendChild(steakImage);

    const turkey = document.createElement('div');
    menu.appendChild(turkey);

    const turkeyHeader = document.createElement('h3');
    turkeyHeader.textContent = 'Ground Beef BBQ';
    turkey.appendChild(turkeyHeader);

    const turkeyQuantity = document.createElement('p');
    turkeyQuantity.textContent = 'Whole';
    turkey.appendChild(turkeyQuantity);

    const turkeyPrice = document.createElement('p');
    turkeyPrice.textContent = '250 DH';
    turkey.appendChild(turkeyPrice);

    const turkeyImage = document.createElement('img');
    turkeyImage.src = './images/turkey.jpg';
    turkey.appendChild(turkeyImage);
}