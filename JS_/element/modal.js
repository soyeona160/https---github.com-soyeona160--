const modalContainer = document.querySelector('.modal-container')
const body = document.querySelector('body')

function addModal(){
    setTimeout(function(){
        body.style.height = "100vh"
        modalContainer.style.display = "block"
    },1000)
}

window.addEventListener('load', addModal)