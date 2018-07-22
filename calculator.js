function calculatePrice() {
    const render = () => {
        totalPrice.innerText = usersNumber * 5 * (isCompany ? 1 : 0) + ' $'
        numberOfUsers.innerText = 'Ilość użytkowników: ' + numberOfCompanyUsers.value
    }
    
    const individualClient = document.querySelector('.calculator__button_individual')
    const companyClient = document.querySelector('.calculator__button_company')
    const numberOfCompanyUsers = document.querySelector('#rangeinput')
    const totalPrice = document.querySelector('.total_price')
    const numberOfUsers = document.querySelector('#number-of-users')

    let usersNumber = null
    let isCompany = false
    

    individualClient.addEventListener('click', function () {
        isCompany = false
        render()
    })
    companyClient.addEventListener('click', function () {
        isCompany = true

        render()
    })

    numberOfCompanyUsers.addEventListener("input", function () {
        usersNumber = numberOfCompanyUsers.value
        render()
    })


}


calculatePrice()


