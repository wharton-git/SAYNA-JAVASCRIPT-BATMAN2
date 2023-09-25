const persoImages = document.querySelectorAll('.batman-personnage img');
const persoInfos = document.querySelectorAll('.perso-info');

persoImages.forEach((image, index) => {
    image.addEventListener('mouseenter', () => {
        persoInfos[index].style.opacity = 1;
    });

    image.addEventListener('mouseleave', () => {
        persoInfos[index].style.opacity = 0;
    });
});

function scroller(el) {
    const rect = el.getBoundingClientRect();
    return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function activerEffetDeScroll() {
    const sections = document.querySelectorAll('.batman-cinema');

    sections.forEach((section) => {
    if (scroller(section) && !section.classList.contains('animate')) {
        section.classList.add('animate');
    }
    });
}

window.addEventListener('scroll', activerEffetDeScroll);

activerEffetDeScroll();
