function calculatePrice (){
    const individualClient = document.querySelector('.calculator__button_individual')
    const companyClient = document.querySelector('.calculator__button_company')
    const numberOfCompanyUsers = document.querySelector('.tickmarks')
    const totalPrice = document.querySelector('.total_price')



    individualClient.addEventListener('click', function(){
       return totalPrice.innerHTML = '0 zł'
    })
    companyClient.addEventListener('click', function(){
        return totalPrice.innerHTML = '5 zł'
     })
    

}

calculatePrice()