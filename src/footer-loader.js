export default function() {
    const content = document.getElementById('content');

    const footer = document.createElement('footer');
    content.appendChild(footer);

    const copyright = document.createElement('p');
    const currentYear = new Date().getFullYear();
    copyright.textContent = `Copyright © ${currentYear} hamzab710`;
    footer.appendChild(copyright);

    const link = document.createElement('a');
    link.href = "https://github.com/hamzab710";
    copyright.appendChild(link);

    const gitIcon = document.createElement('img');
    gitIcon.src = "icons/github.svg";
    gitIcon.classList.add('git-icon');
    link.appendChild(gitIcon);
}