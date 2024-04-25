const dropDown = document.querySelector('.dropdown')
const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')

document.getElementById('menu').addEventListener('click', ()=> {
    dropDown.classList.toggle('open')
    const isOpen = dropDown.classList.contains('open')

    if (isOpen) {
        toggleBtnIcon.classList = 'fa-solid fa-xmark'
    }
    else {
        toggleBtnIcon.classList = 'fa-solid fa-bars'
    }
})

document.getElementById('homeButton').addEventListener('click', ()=>  {
    dropDown.classList.remove('open')
    toggleBtnIcon.classList = 'fa-solid fa-bars'
    console.log('removed!')
})
document.getElementById('aboutButton').addEventListener('click', ()=>  {
    dropDown.classList.remove('open')
    toggleBtnIcon.classList = 'fa-solid fa-bars'
    console.log('removed!')
})
document.getElementById('processButton').addEventListener('click', ()=>  {
    dropDown.classList.remove('open')
    toggleBtnIcon.classList = 'fa-solid fa-bars'
    console.log('removed!')
})
document.getElementById('reviewsButton').addEventListener('click', ()=>  {
    dropDown.classList.remove('open')
    toggleBtnIcon.classList = 'fa-solid fa-bars'
    console.log('removed!')
})
document.getElementById('contactButton').addEventListener('click', ()=>  {
    dropDown.classList.remove('open')
    toggleBtnIcon.classList = 'fa-solid fa-bars'
    console.log('removed!')
})