const container = document.querySelector('.photos')
const options = document.querySelectorAll('.option')
const photos = document.querySelectorAll('.photo')
const selectTarget = document.querySelectorAll('.select')

let index = 0; 

function moveSlide(){
    setInterval(slideWidth, 1000)
}

function slideWidth(){
    console.log(index)
    options[index].classList.remove('select')
    index++
    container.style.marginLeft = ( -1 * (index) * 60) + 'vw'
    if(index>photos.length-1){
        index = 0;
    }
    options[index].classList.add('select')
}

function moveOption(){

}

// 

function selectOption(e){
    e.target.classList.add('select')
}
function clearOption(e){
    options.classList.remove('select')
}

for(let option of options){
    option.addEventListener('click',selectOption)
    if(selectTarget.className === 'select'){
        // option.addEventListener('click', clearOption)
        options.classList.remove('select')
    }
}
// options.addEventListener('click', selectOption)



window.addEventListener('load', moveSlide)
window.addEventListener('load', moveOption)