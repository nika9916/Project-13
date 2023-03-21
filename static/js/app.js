const navWrapper = document.querySelector(".nav-wrapper");
const navBurger = document.querySelector(".burger");

const modal = document.querySelector('.modal-wrapper')
const closeBtn = document.querySelector('.close-button')
const openBtn = document.querySelector('.open')

function navToggler() {
    navWrapper.classList.toggle("nav-links-burger");
}


navBurger.addEventListener("click", navToggler);






function triggerModal (modal) {
    modal.classList.toggle('active')
}

openBtn.addEventListener('click', () => {
    triggerModal(modal)
})
closeBtn.addEventListener('click', () => {
    triggerModal(modal)
})


window.addEventListener('click', (e) => {
    if(e.target == document.querySelector('.modal-wrapper')) {
        triggerModal(modal)
    }
})
