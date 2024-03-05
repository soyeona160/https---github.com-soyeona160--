const sections = document.querySelectorAll('section')
const main = document.querySelector('.main')
const sectionWidth = sections[0].clientWidth
let timer = 0
let index = 0
function throttling(handler, e){
    if(!timer){
        timer = setTimeout(function(){
            handler(e)
            timer = null
        }, 100)
    }
}

function nextSlide(e){
    console.log(e.deltaY)
    if(e.deltaY>0){
        main.style.left = -(sectionWidth*(index+1)) + 'px'
        index++
    }else if(e.deltaY<0){
        main.style.left = (sectionWidth*(index-(index-1))) + 'px'
        index--
    }
    console.log(index)
}


document.addEventListener('wheel', (e)=> throttling(nextSlide, e))