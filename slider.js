// function fadingOut() {
//     let slides = document.querySelectorAll('.hero__image-cover');
//     var i = 0;
//     for (i = 0; i < slides.length; i++) {
//         setTimeout(function() { document.querySelectorAll('.hero__image-cover')[i].style.opacity = '0'; }, 1000);
//     }
// };

// function fadingOut() {
//     let slides = document.querySelectorAll('.hero__image-cover');
//     var i = 0;
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.opacity = '0';
//     }
// };

// setTimeout(fadingOut, 1000);

function fadingOut1() {
    const slide = document.querySelector('.hero__image-cover--active')
    const nextSlide = slide.nextElementSibling
    slide.classList.remove('hero__image-cover--active')
    if(nextSlide && nextSlide.classList.contains('hero__image-cover')){
        nextSlide.classList.add('hero__image-cover--active')
    }else{
        document.querySelector('.hero__image-cover').classList.add('hero__image-cover--active')
    }

}

setInterval(fadingOut1, 3000)