import inView from './in-view'

export default inView('#team')
            .on('enter', () => {
                const teamPhotos = document.querySelectorAll('.animation')

                for (let i = 0; i < teamPhotos.length; i++) {
                    teamPhotos[i].classList.add('animated')
                    teamPhotos[i].classList.add('slideInUp')
                }
            })