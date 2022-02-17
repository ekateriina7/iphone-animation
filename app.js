const tlInrto = gsap.timeline({
    scrollTrigger: {
        trigger: '.first-page',
        start: '0%',
        end: '100%',
        pin: true,
        pinSpacing: false
    }
})

const tlH = gsap.timeline({
    scrollTrigger: {
        trigger: '.second-page',
        start: '-40%',
        end: '40%',
        scrub: true
    }
})

tlH.fromTo('.highlight', {color: 'rgba(255,255,255, 0.4'}, {color: 'rgba(255,255,255, 1', stagger:1})

const tlHR = gsap.timeline({
    scrollTrigger: {
        trigger: '.second-page',
        start: '-20%',
        end: '60%',
        scrub: true
    }
})

tlHR.to('.highlight',{color: 'rgba(255,255,255, 0.4', stagger:1})

const tlSplit = gsap.timeline({
    scrollTrigger: {
        trigger: '.third-page',
        start: '-20%',
        end: '30%',
        scrub: true
    }
})

tlSplit.fromTo('.large-phone',{x:'40%'}, {x: '20%'});
tlSplit.fromTo('.small-phone',{x:'-40%'}, {x: '-20%'}, '<');
tlSplit.fromTo('.product-text-left',{x:50, opacity:0}, {x: 0, opacity:1}, '<');
tlSplit.fromTo('.product-text-right',{x:-50, opacity:0}, {x: 0, opacity:1}, '<')

const tlSplitPin = gsap.timeline({
    scrollTrigger: {
        trigger: '.third-page',
        start: '0%',
        end: '100%',
        pin: true,
        pinSpacing: false
    }
})

const swatches = document.querySelectorAll('.swatches img');
const gallery = document.querySelector('.phone-gallery');
const slides = document.querySelectorAll('.phone-gallery-container');

let currentSwatch = 'blue';
swatches.forEach((swatch, index)=>{
    const coord = slides[index].getBoundingClientRect().left;
    swatch.addEventListener('click', (e)=>{
        let swatchName
    })
})
