
// PRODUCT LIST 

const showProductList = document.querySelector('.product-heading-container')
const productListItems = document.querySelector('.product-data-ul')
const productIcon = document.querySelector('.product-icon')
const productDarkIcon = document.querySelector('.product-dark-icon')

// COMPANY LIST 

const showCompanyList = document.querySelector('.company-heading-container')
const companyListItems = document.querySelector('.company-data-ul')
const companyIcon = document.querySelector('.company-icon')
const companyDarkIcon = document.querySelector('.company-dark-icon')

// CONNECT LIST 

const showConnectList = document.querySelector('.connect-heading-container')
const connectListItems = document.querySelector('.connect-data-ul')
const connectIcon = document.querySelector('.connect-icon')
const connectDarkIcon = document.querySelector('.connect-dark-icon')

// HAMBURGER MENU 

const openIcon = document.querySelector('.icon-open')

const closeIcon = document.querySelector('.icon-close')

const hambergurMenu = document.querySelector('.hamburger-menu-container')

// SHOW LISTS 

showProductList.addEventListener('click', () => {
    productListItems.classList.toggle('none')
    companyListItems.classList.add('none')
    connectListItems.classList.add('none')
    productIcon.classList.toggle('toggle-icon')
    productDarkIcon.classList.toggle('toggle-icon')
})

showCompanyList.addEventListener('click', () => {
    companyListItems.classList.toggle('none')
    productListItems.classList.add('none')
    connectListItems.classList.add('none')
    companyIcon.classList.toggle('toggle-icon')
    companyDarkIcon.classList.toggle('toggle-icon')
})

showConnectList.addEventListener('click', () => {
    connectListItems.classList.toggle('none')
    productListItems.classList.add('none')
    companyListItems.classList.add('none')
    connectIcon.classList.toggle('toggle-icon')
    connectDarkIcon.classList.toggle('toggle-icon')
})

// OPEN MENU 

openIcon.addEventListener('click', () => {
    hambergurMenu.classList.toggle('open-nav')
    closeIcon.classList.toggle('none')
    openIcon.classList.toggle('none')
})

// CLOSE MENU 

closeIcon.addEventListener('click', () => {
    hambergurMenu.classList.toggle('open-nav')
    closeIcon.classList.toggle('none')
    openIcon.classList.toggle('none')
})