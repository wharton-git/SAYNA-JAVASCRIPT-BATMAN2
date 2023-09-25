document.addEventListener('DOMContentLoaded', function() {
    let flecheHaut = document.getElementById('toTop')
    let flecheBas = document.getElementById('toBottom')
    flecheHaut.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

    flecheBas.addEventListener('click', () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        })
    })
})