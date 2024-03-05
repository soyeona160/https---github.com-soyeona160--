const box = document.getElementById('box-container')

const circle = document.querySelector('.box')

const openBtn = document.querySelector('.info')
const sidebar = document.querySelector('.side-bar')
const circles = document.querySelectorAll('.box')

let select= 0;

//사이드바 구현 과제 11
function openSide(e){
    console.log(e.target)
    console.log('buttonClick')
    sidebar.classList.add('open')
    setTimeout(closeSide,3000)
}

function closeSide(e){
    sidebar.classList.remove('open')
}

openBtn.addEventListener('click',openSide)



//여러개 만들어보자

function moveCircles(e){
    
    // circles[select].style.top ='50px'
    setTimeout(function(){
        circles[select].style.top='0px'}, 40)

    setTimeout(function(){
        circles[select].style.top='-20px'}, 50)

    
    circles[select].style.top='20px'
    select++
        

    if(select>circles.length-1){
        select = 0;
    }
    
}

function startLoading(e){
    setInterval(moveCircles ,300)
}
window.addEventListener('load',startLoading)