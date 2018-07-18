
// Funkcja - "slider" która odejmuje klasę hero__image-cover--active (ma ona opacity ustawione na 1, pozostałe zdjęcia opacity 0) i dodaje ją do kolejnego zdjęcia


function fadingOut(direction = 'right') {
    const slide = document.querySelector('.hero__image-cover--active')
    let nextSlide
    if (direction === 'right') {
        nextSlide = slide.nextElementSibling
    }
    else if (direction === 'left') {
        nextSlide = slide.previousElementSibling
    }
    else {

    }
    slide.classList.remove('hero__image-cover--active')
    if (nextSlide && nextSlide.classList.contains('hero__image-cover')) {
        nextSlide.classList.add('hero__image-cover--active')
    } else {
        document.querySelector('.hero__image-cover').classList.add('hero__image-cover--active')
    }

}

// Zatrzymanie slidera na zdarzenie "mouseover" i wznowienie na zdarzenie "mouseout"

let stopIv = setInterval(fadingOut, 2000)
document.querySelector('.pause_slider_left').addEventListener('mouseover', function () {
    clearInterval(stopIv)
})
document.querySelector('.pause_slider_right').addEventListener('mouseover', function () {
    clearInterval(stopIv)
})
document.querySelector('.pause_slider_left').addEventListener('mouseout', function () {
    stopIv = setInterval(fadingOut, 2000)
})
document.querySelector('.pause_slider_right').addEventListener('mouseout', function () {
    stopIv = setInterval(fadingOut, 2000)
})



// reakcja na kliknięcie użytkownika na obszar "strzałki slidera" 

document.querySelector('.hero__slider_button_right_container').addEventListener('click', function () { fadingOut('right') })

document.querySelector('.hero__slider_button_left_container').addEventListener('click', function () { fadingOut('left') })



// dodaje klase animate css do zdjec aby je animować
// const teamPhotos = document.querySelectorAll('.animation')

// for (let i = 0; i < teamPhotos.length; i++) {
//     teamPhotos[i].addEventListener('mouseover', function () {
//         teamPhotos[i].classList.add('animated')
//         teamPhotos[i].classList.add('slideInUp')
//     })
// }