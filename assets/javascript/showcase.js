const productcardsData = [
    {
        src: './assets/images/jacket.png',
        type: 'Camisetas',
        title: 'Lightweight Jacket',
        description: 'Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...',
        price: 'R$ 100.00',
    },
    {
        src: './assets/images/hat.png',
        type: 'Acessórios',
        title: 'Black Hat',
        description: 'O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...',
        price: 'R$ 100.00',
    },
    {
        src: './assets/images/mask.png',
        type: 'Acessórios',
        title: 'Mask',
        description: 'Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...',
        price: 'R$ 40.00',
    },
    {
        src: './assets/images/Tshirt.png',
        type: 'Camisetas',
        title: 'T-Shirt',
        description: 'Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...',
        price: 'R$ 100.00',
    },
    {
        src: './assets/images/whiteTshirt.png',
        type: 'Camisetas',
        title: 'Short-Sleeve T-Shirt',
        description: 'Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...',
        price: 'R$ 100.00',
    },
    {
        src: './assets/images/champion.png',
        type: 'Camisetas',
        title: 'Champion Packable Jacket',
        description: 'Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...',
        price: 'R$ 100.00',
    },
]

const cardmaker = data => {

    const productCardContainer = document.createElement('div')
    const productCardHeader = document.createElement('div')
    const productCardFigure = document.createElement('figure')
    const productCardImage = document.createElement('img')
    const productCardBody = document.createElement('div')
    const productCardType = document.createElement('div')
    const productCardTitle = document.createElement('h3')
    const productCardDescription = document.createElement('p')
    const productCardPrice = document.createElement('p')
    const productCardAdd = document.createElement('p')

    productCardContainer.classList.add('productcard')
    productCardHeader.classList.add('productcard__header')
    productCardBody.classList.add('productcard__body')
    productCardType.classList.add('productcard__body--type')
    productCardTitle.classList.add('productcard__body--title')
    productCardDescription.classList.add('productcard__body--description')
    productCardPrice.classList.add('productcard__body--price')
    productCardAdd.classList.add('productcard__body--add')

    productCardImage.setAttribute('src', data['src'])
    productCardAdd.setAttribute('onclick', 'addToShoppingCart(event)')

    productCardType.textContent = data['type']
    productCardTitle.textContent = data['title']
    productCardDescription.textContent = data['description']
    productCardPrice.textContent = data['price']
    productCardAdd.textContent = 'Adicionar ao carrinho'

    productCardFigure.appendChild(productCardImage)
    productCardHeader.appendChild(productCardFigure)
    productCardContainer.appendChild(productCardHeader)

    productCardContainer.appendChild(productCardBody)
    productCardBody.appendChild(productCardType)
    productCardBody.appendChild(productCardTitle)
    productCardBody.appendChild(productCardDescription)
    productCardBody.appendChild(productCardPrice)
    productCardBody.appendChild(productCardAdd)

    productCardContainer.appendChild(productCardHeader)
    productCardContainer.appendChild(productCardBody)

    return productCardContainer
}

const addCardToDom = cardReference => {
    const showcase = document.querySelector('.showcase')
    showcase.appendChild(cardReference)
}

const appendCards = cardsArr => {

    cardsArr.forEach(element => {
        const card = cardmaker(element)
        addCardToDom(card)
    })
}

window.onload = appendCards(productcardsData)


