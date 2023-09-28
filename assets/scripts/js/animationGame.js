/* -------------- 🪂🪂 Quelques animation pour la page game 🎮🎮 ----------------- */

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

//animation curseur souris 🫤

const canvas = document.getElementById('canvas');
console.log(canvas); 

const c = canvas.getContext('2d');
const img = new Image();
const clones = [];

img.src = './assets/Logos/logohome.png';

const bat = {
    positions: [],
    draw() {
        c.drawImage(img, 0, 0, 50, 20);
    }
}

window.addEventListener("mousemove", deplacement);

function deplacement(event) {
    canvas.style.top = event.clientY + window.scrollY + 10 + "px";
    canvas.style.left = event.clientX + window.scrollX + 10 + "px";
}

//verification si l'icone est bien chargé🙃
img.onload = function () {
    console.log('Image chargée avec succès'); 
    bat.draw(); 
};


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
