// 입력할 떄마다 색상이 랜덤 출력되게 만들기
const colorInput = document.getElementById('color-input')
const colorBox = document.querySelector('.color-box')

function setColor(e){
    if(e === 0){
        colorBox.style.backgroundColor='rgb(0, 0, 0)'
    }
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}


colorInput.addEventListener('input', setColor)