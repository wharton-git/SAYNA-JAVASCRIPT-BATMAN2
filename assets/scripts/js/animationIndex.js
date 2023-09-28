/* ----------------- 😉 Animation pricipale du page index 😉  ------------------- */

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

const animationElements = document.querySelectorAll('.animationElement');

function handleVisibility(elements) {
    elements.forEach((element) => {
        let isVisible = false;

        function checkVisibility() {
            const { clientHeight } = document.documentElement;
            const topElementEcran = element.getBoundingClientRect().top;
            const elementHeight = element.clientHeight;

            const isCurrentlyVisible = (
                topElementEcran + elementHeight > 0 &&
                topElementEcran < clientHeight
            );

            if (!isVisible && isCurrentlyVisible) {
                element.classList.add('active');
            } else if (isVisible && !isCurrentlyVisible) {
                element.classList.remove('active');
            }

            isVisible = isCurrentlyVisible;
        }

        window.addEventListener('load', checkVisibility);
        window.addEventListener('scroll', checkVisibility);
    });
}

handleVisibility(animationElements);


//Zoom des images

const zoomElements = document.querySelectorAll('.zoom');

function handleZoomVisibility(elements) {
    elements.forEach((element) => {
        let isVisible = false;

        function checkZoomVisibility() {
            const { clientHeight } = document.documentElement;
            const topElementEcran = element.getBoundingClientRect().top;
            const elementHeight = element.clientHeight;

            const isCurrentlyVisible = (
                topElementEcran + elementHeight > 0 &&
                topElementEcran < clientHeight
            );

            if (!isVisible && isCurrentlyVisible) {
                element.classList.add('activeZoom');
            } else if (isVisible && !isCurrentlyVisible) {
                element.classList.remove('activeZoom');
            }

            isVisible = isCurrentlyVisible;
        }

        window.addEventListener('load', checkZoomVisibility);
        window.addEventListener('scroll', checkZoomVisibility);

        checkZoomVisibility();
    });
}

handleZoomVisibility(zoomElements);
