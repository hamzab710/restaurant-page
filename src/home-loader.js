export default function loadHome() {
    const content = document.getElementById('content');

    const home = document.createElement('div');
    home.id = 'home';
    content.appendChild(home);

    //about section
    const about = document.createElement('div');
    about.id = 'about';
    home.appendChild(about);

    const aboutUs = document.createElement('h3');
    aboutUs.textContent = 'About Us';
    about.appendChild(aboutUs);

    const aboutText = document.createElement('p');
    aboutText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At explicabo laudantium dolore blanditiis vitae. Optio expedita cum magnam deserunt soluta nulla consequatur, maxime necessitatibus eaque. Itaque, vel qui! Doloremque, vero?";
    about.appendChild(aboutText);

    //hours section
    const hours = document.createElement('div');
    hours.id = 'hours';
    home.appendChild(hours);

    const hoursHeader = document.createElement('h3');
    hoursHeader.textContent = 'Hours';
    hours.appendChild(hoursHeader);

    const weekDays = document.createElement('p');
    weekDays.textContent = 'Monday to Friday: 10am - 10pm';
    hours.appendChild(weekDays);

    const weekEnds = document.createElement('p');
    weekEnds.textContent = 'Weekends: 10am - 2am';
    hours.appendChild(weekEnds);

    //location section
    const location = document.createElement('div');
    location.id = 'location';
    home.appendChild(location);

    const locationHeader = document.createElement('h3');
    locationHeader.textContent = 'Location';
    location.appendChild(locationHeader);

    const locationText = document.createElement('p');
    locationText.textContent = '123, Hay Essaada, Dakhla, Agadir';
    location.appendChild(locationText);
}