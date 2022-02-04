const navbar = document.querySelector('.navbar')

navbar.addEventListener('click', event => {

    const clickedElement = event.target
    const showcase = document.querySelector('.showcase')
    const lowerCaseTagName = clickedElement.tagName.toLowerCase()

    if (lowerCaseTagName === 'a' && clickedElement.textContent !== '') {
        const category = clickedElement.textContent
        showcase.innerHTML = ''

        if (category !== 'Todos') {
            const elementsByCategory = productcardsData.filter(product => product.type === category )
            appendCards(elementsByCategory)
            return 
        }
        appendCards(productcardsData)
    }
})
