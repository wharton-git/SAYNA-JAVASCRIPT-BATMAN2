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