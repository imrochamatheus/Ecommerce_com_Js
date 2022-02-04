const input = document.querySelector('input')
const button = document.querySelector('.searchButton')
const showcase = document.querySelector('.showcase')

button.addEventListener('click', () => {
    
    const inputValue = input.value.toLowerCase()

    const matchedProducts = productcardsData.filter(product => {
       const productTitle = product['title'].toLocaleLowerCase()
        
        if(productTitle.includes(inputValue)) {
            return product
        }
    })

    if (matchedProducts.length !== 0) {

        showcase.innerHTML = ''
        appendCards(matchedProducts)    
        return 
    } 

    showcase.innerHTML = ''
    appendCards(productcardsData)    
})

input.addEventListener('input', event => {
    const inputValue = event.target.value
    
    if (inputValue === '') {
        showcase.innerHTML = ''
        appendCards(productcardsData)
    }
})