const nav = document.querySelector(".nav-links")
const burger = document.querySelector(".burger")

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active")
    burger.classList.toggle("toggle")
})


const tl = gsap.timeline({default: {ease: 'power1.out'}})

tl.to(".text", { y: "0%",duration: 1, stagger: 0.25})

tl.to('.slider', {y : "-100%", duration : 1.5, delay:0.5})
tl.to('.intro', {y : "-100%", duration: 1}, "-=1")
tl.fromTo('nav',{opacity :0 }, {opacity:1, duration: 1})
tl.fromTo('.rt',{opacity :0 }, {opacity:1, duration: 1})
tl.fromTo('.anim',{opacity :0 ,y:"-100%"}, {opacity:1, duration: 1,interval:0.7, y:"0%"})



ScrollReveal().reveal('.top',{
  origin: 'top' , duration: 1500, distance: '60px', interval:100, opacity : 0
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