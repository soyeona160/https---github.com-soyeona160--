const img = document.querySelector('.img')
// const show = document.querySelector('.show')


function showImg(){
    img.classList.add('show')
}

function removeImg(){
    img.classList.remove('show')
}

setTimeout(showImg,1000)
setTimeout(removeImg,3000)