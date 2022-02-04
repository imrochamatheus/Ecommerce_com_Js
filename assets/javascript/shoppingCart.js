const shoppingCartCardRemove = event => {
    const parentElement = event.target.parentElement
    const price = event.target.previousSibling.textContent
   
    parentElement.remove()
    decreaseAmountAndTotal(price)
}

const incrementAmountAndTotal = price => {
    const amount = document.querySelector('.shoppingcart__footer--amount-value')    
    const total = document.querySelector('.shoppingcart__footer--total-value')
    const priceValue = price.textContent.replace('R$ ', '')
    const amountValue = amount.textContent
    
    amount.textContent = parseInt(amountValue) + 1 
    total.textContent = 'R$ ' + (parseInt(priceValue) + parseInt(total.textContent.replace('R$ ', ''))).toFixed(2)
}

const decreaseAmountAndTotal = price => {
    const amount = document.querySelector('.shoppingcart__footer--amount-value')
    const total = document.querySelector('.shoppingcart__footer--total-value')
    const totalValue = parseInt(total.textContent.replace('R$ ', ''))
    const amountValue = amount.textContent
    price = parseInt(price.replace('R$ ', ''))
    
    amount.textContent = parseInt(amountValue) - 1
    total.textContent = 'R$ ' + (totalValue - price).toFixed(2)
}

const addToShoppingCart = event => {

    const targetParent = event.target.parentElement['parentElement']
    const children = Array.from(targetParent.children, child => child.childNodes)
    const shoppingCartBody = document.querySelector('.shoppingcart__body')

    const shoppingCartCard = document.createElement('div')
    const shoppingCartCardFigure = document.createElement('figure')
    const shoppingCartCardImage = document.createElement('img')
    const shoppingCartCardTitle = document.createElement('h3')
    const shoppingCartCardPrice = document.createElement('p')
    const shoppingCartCardRemove = document.createElement('a')

    shoppingCartCard.classList.add('shoppingcart__card')
    shoppingCartCardFigure.classList.add('shoppingcart__card--image')
    shoppingCartCardTitle.classList.add('shoppingcart__card--title')
    shoppingCartCardPrice.classList.add('shoppingcart__card--price')
    shoppingCartCardRemove.classList.add('shoppingcart__card--remove')

    shoppingCartCardFigure.appendChild(shoppingCartCardImage)
    shoppingCartCard.appendChild(shoppingCartCardFigure)
    shoppingCartCard.appendChild(shoppingCartCardTitle)
    shoppingCartCard.appendChild(shoppingCartCardPrice)
    shoppingCartCard.appendChild(shoppingCartCardRemove)

    const { src } = children[0][0].children[0]
    const [,title, ,price] = children[1]
    
    shoppingCartCardTitle.textContent = title.textContent
    shoppingCartCardPrice.textContent = price.textContent
    shoppingCartCardRemove.textContent = 'Remover produto'
    shoppingCartCardRemove.setAttribute('onclick', 'shoppingCartCardRemove(event)')
    shoppingCartCardImage.setAttribute('src', src)
    
    shoppingCartBody.appendChild(shoppingCartCard)
    incrementAmountAndTotal(price)
}
