const container = document.querySelector('.container')
const prevBtn = document.querySelector('.control.before')
const nextBtn = document.querySelector('.control.after')
const margin = 10
const delta = document.querySelector('.item').offsetWidth + margin



function moveToRight(){
    container.scrollLeft -= delta // -item size
}
function moveToLeft(){
    container.scrollLeft += delta //+아이템 사이즈
}


prevBtn.addEventListener('click', moveToRight)
nextBtn.addEventListener('click', moveToLeft)