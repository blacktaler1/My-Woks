const modal = document.querySelector('#modal')
const button = document.querySelector('#show-btn')
const closebtn = document.querySelector('#close-btn') 

button.addEventListener('click',e  => {
    modal.setAttribute(
        "style", "display:block;"
    )
    button.setAttribute(
        "style", "display:none;"
    )
})
closebtn.addEventListener('click', e => {
    modal.setAttribute(
        "style", "display:none;"
    )
    button.setAttribute(
        "style", "display:block"
    )
})