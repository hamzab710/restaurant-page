export default function loadContact() {
    const content = document.getElementById('content');

    const contact  = document.createElement('div');
    contact.id = 'contact';
    content.appendChild(contact);

    const phone = document.createElement('div');
    contact.appendChild(phone);

    const phoneIcone = document.createElement('img');
    phoneIcone.src = './icons/phone.svg'
    phone.appendChild(phoneIcone);

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '06 12 34 56 78';
    phone.appendChild(phoneNumber);

    const mail = document.createElement('div');
    contact.appendChild(mail);

    const mailIcone = document.createElement('img');
    mailIcone.src = './icons/mail.svg'
    mail.appendChild(mailIcone);

    const email = document.createElement('p');
    email.textContent = 'bbq.house@yahoo.com';
    mail.appendChild(email);
}