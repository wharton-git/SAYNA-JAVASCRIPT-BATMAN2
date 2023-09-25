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

const btnVoirLeHeros = document.querySelector('.cta .btn:nth-child(1)');
const btnLesAdversaires = document.querySelector('.cta .btn:nth-child(2)');

btnVoirLeHeros.addEventListener('click', (e) => {
e.preventDefault();
scrollToSection('batman-cinema');
});

btnLesAdversaires.addEventListener('click', (e) => {
e.preventDefault(); 
scrollToSection('enemis'); 
});

function scrollToSection(sectionId) {
const section = document.getElementById(sectionId);
if (section) {
    window.scrollTo({
    top: section.offsetTop,
    behavior: 'smooth'
    });
}
}

// function scroller(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// function activerEffetDeScroll() {
//     const sections = document.querySelectorAll('.batman-cinema');

//     sections.forEach((section) => {
//     if (scroller(section) && !section.classList.contains('animate')) {
//         section.classList.add('animate');
//     }
//     });
// }

// window.addEventListener('scroll', activerEffetDeScroll);

// activerEffetDeScroll();
