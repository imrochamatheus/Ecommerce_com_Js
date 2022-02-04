const openMenuButton = document.querySelector('.btn-open')
const closeMenuButton = document.querySelector('.btn-close')

openMenuButton.addEventListener('click', () => {
    const menu = document.querySelector('.navbar')

    menu.classList.toggle('closed-navbar')
})

closeMenuButton.addEventListener('click', () => {
    const menu = document.querySelector('.navbar')

    menu.classList.toggle('closed-navbar')
})