
// Funkcja - "slider" która odejmuje klasę hero__image-cover--active (ma ona opacity ustawione na 1, pozostałe zdjęcia opacity 0) i dodaje ją do kolejnego zdjęcia

function fadingOut() {
    const slide = document.querySelector('.hero__image-cover--active')
    const nextSlide = slide.nextElementSibling
    slide.classList.remove('hero__image-cover--active')
    if(nextSlide && nextSlide.classList.contains('hero__image-cover')){
        nextSlide.classList.add('hero__image-cover--active')
    }else{
        document.querySelector('.hero__image-cover').classList.add('hero__image-cover--active')
    }

}

setInterval(fadingOut, 4000) 


// Zatrzymanie funkcji setInterval w momencie najechania myszką na kontener z klasą "pause_slider" - nie działa, nie wiem dlaczego

document.querySelector('.pause_slider').addEventListener('mouseover',function() {
    let stopInterval = setInterval(fadingOut, 3000)
   clearInterval(stopInterval)
})


    
// reakcja na kliknięcie użytkownika na obszar "strzałki slidera" - działa ale cały czas zmienia zdjęcia w kolejności do prawej 

document.querySelector('.hero__slider_button_right_container').addEventListener('click', fadingOut)

document.querySelector('.hero__slider_button_left_container').addEventListener('click', fadingOut)





// modyfikacja funkcji - "slider" Funkcja w której w zalezności od przekazanego parametru (1,2 czyli prawo lub lewo) zmiennej nextSlide przypisujemy kolejne lub poprzednie rodzeństwo
// funkcja nie działa


// function fadingOut(direction) {
//     const slide = document.querySelector('.hero__image-cover--active')
//     let nextSlide
//     if (direction === 1) {
//         nextSlide = slide.nextElementSibling}
//     else {
//         nextSlide = slide.previousElementSibling   
//         }
//     slide.classList.remove('hero__image-cover--active')
//         if(nextSlide && nextSlide.classList.contains('hero__image-cover')){
//             nextSlide.classList.add('hero__image-cover--active')
//          }else{
//          document.querySelector('.hero__image-cover').classList.add('hero__image-cover--active')
//         }
//     }
// document.querySelector('.hero__slider_button_right_container').addEventListener('click', fadingOut(1))

// document.querySelector('.hero__slider_button_left_container').addEventListener('click', fadingOut(2))
