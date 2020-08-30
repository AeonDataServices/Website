// Hamburger mobile menu
let mainNav = document.getElementById('js-menu')
let navBarToggle = document.getElementById('js-navbar-toggle')
let services = document.getElementById('services-scroll-target')
navBarToggle.addEventListener('click', () => mainNav.classList.toggle('active'))

// Smoooth scrolling
let smoothScrollArray = [["services-scroll-target"]]
let heroScroll = document.getElementById('heroScroll')
heroScroll.addEventListener('click', () => services.scrollIntoView({behavior: 'smooth'}))

let navLinks = document.getElementsByClassName("nav-links")
for(let link of navLinks) {
    console.log(link.href);
}