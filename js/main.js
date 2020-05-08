

function navSlide() {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
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


