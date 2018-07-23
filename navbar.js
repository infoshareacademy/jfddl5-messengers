document.querySelector('.hamburger__icon').addEventListener(
    'click',
    () => {
        const ifMenuOpen = document.querySelector('.navbar__container__items').classList.contains('navbar__container__items--open')

        if (ifMenuOpen) {
            document.querySelector('.navbar__container__items').classList.remove('navbar__container__items--open')
            document.querySelector('.navbar__container__items').classList.add('navbar__container__items--close')
        }
        else {
            document.querySelector('.navbar__container__items').classList.remove('navbar__container__items--close')
            document.querySelector('.navbar__container__items').classList.add('navbar__container__items--open')
        }
    }
)
