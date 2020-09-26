
let navbar = document.getElementById('navbar') 
scrollNavbar = () => {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

// Make sure the navbar has opacity on site load if not starting on the main page
window.onload = scrollNavbar
window.onscroll = scrollNavbar

// Hamburger mobile menu
let mainNav = document.getElementById('js-menu')
let navBarToggle = document.getElementById('js-navbar-toggle')
let services = document.getElementById('services-scroll-target')
navBarToggle.addEventListener('click', () => mainNav.classList.toggle('active'))

// Smoooth scrolling
let smoothScrollArray = [["services-scroll-target"]]
let heroScroll = document.getElementById('heroScroll')
heroScroll.addEventListener('click', () => services.scrollIntoView({behavior: 'smooth'}))

// TODO Add smooth scroll to the navlinks
let navLinks = document.getElementsByClassName("nav-links")
for(let link of navLinks) {
    // elementId = link.href.split(#) get element [-1]
    // let element = document.getElementById(elementId)
    // add event listener click
    console.log(link.href);
}