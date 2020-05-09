

function navSlide() {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    let isMouseDown = false;
    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active')
    })
    
}


navSlide()



new Glide('.glide', {
    autoplay: 7000,
    hoverpause: true,
}).mount()

new Cocoen(document.querySelector('.cocoen'));



function continueReading() {
    const dots = document.getElementById('dots')
    const moreText = document.getElementById('more')
    const btnText = document.getElementById('myBtn')

    btnText.addEventListener('click', () => {

        
        if (dots.style.display === 'none') {
            dots.style.display = 'inline'
            btnText.innerHTML = 'Leggi di più'
            moreText.style.display = 'none'
        } else {
            dots.style.display = 'none'
            btnText.innerHTML = 'Minimizza'
            moreText.style.display = 'inline'
        }

    })

    
}

continueReading()

