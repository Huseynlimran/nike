const nav = document.querySelector(".nav-links")
const burger = document.querySelector(".burger")

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active")
    burger.classList.toggle("toggle")
})






ScrollReveal().reveal('.top',{
  origin: 'top' , duration: 1000, distance: '60px', interval:100, opacity : 0
})
ScrollReveal().reveal('.bottom',{
  origin: 'bottom' , duration: 1800, distance: '60px',opacity : 0
})
ScrollReveal().reveal('.left',{
  origin: 'left' , duration: 2800,interval:100, distance: '60px', opacity : 0
})

ScrollReveal().reveal('.sag',{
  origin: 'right' , duration: 1800, distance: '60px', opacity : 0
})
ScrollReveal().reveal('.sol',{
  origin: 'left' , duration: 1800, interval: 100, distance: '60px', opacity : 0
})

ScrollReveal().reveal('.opacity',{
    origin: 'center' , duration: 1800, interval: 100, distance: '60px', opacity : 0
  })
