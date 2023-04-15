//hamburger

const hamburger = document.querySelector('.burger__nav')
const navMenu = document.querySelector('.header__list')
const head = document.querySelector('.header')
const headCont = document.querySelector('.header__container')
const opac = document.querySelector('.doc_opacity')

hamburger.addEventListener('click', (event) => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
  head.classList.toggle('active')
  headCont.classList.toggle('active')
  opac.classList.toggle('active')
})

document.querySelectorAll('.header__item-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
    head.classList.remove('active')
    headCont.classList.remove('active')
    opac.classList.remove('active')
  })
)
