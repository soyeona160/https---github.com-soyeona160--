const colorBox = document.querySelector('.color-box')
const colorInput = document.getElementById('color-input')
const colorList = document.querySelector('.color-list')

//색상목록 서버에서 갖고와야하는데
//우리는 서버가 없쥬?

const colors = ['violet', 'snow', 'azure','antiquewhite','salmon','lavender']
let index = -1
let prevIndex = -1
// 타이핑 할 때 이벤트 발생 및 처리
function addColors(colors){
    for(let color of colors){
        console.log(color)
        const item = `<div class='color-item'>${color}</div>`  
        colorList.innerHTML += item  
    }
}

function typeColor(e){
    console.log(e.target.value) //입력값
    
    if(e.target.value !== ''){
        console.log('입력함')
        colorList.classList.add('show')
        colorInput.addEventListener('keyup',selectColor)// 키 이벤트가 동작하도록 하기
    }else{
        console.log('입력안함')
        colorList.classList.remove('show')
        colorInput.removeEventListener('keyup',selectColor)//키 이벤트를 해제해서 사용자가 색상을 못하도록 함 
    }
}
function selectColor(e){ // 사용자가 화살표키로 색상을 선택할 때 하이라이트 적용
    console.log(e.keyCode) // 키값의 숫자 
    if(e.keyCode){
        changeHighLightItem(e.keyCode) //사용자가 선택한 색상에 대한 index 값 변경
        unsetHighLightItem(prevIndex)// 사용자가 직전에 선택한 색상에 적용된 하이라이트 해제
        highghtColorItem(index)//사용자가 현재 선택한 색상에 하이라이트 적요 
     }
}

function changeHighLightItem(key){
    prevIndex = index //현재 사용자가 선택한 색상에 대한 인덱스값 저장 
    if(key === 40){//키다운
        index++
        if(index > colors.length-1){
            index = 0; 
        }
    }else if(key ===38){//
        index--
        if(index<0){
            index = colors.length-1
        }    
    }else if(key ===13){
        setBackground(colors[index])//배경색 변경
    }

    console.log('직전에 선택한 색상',prevIndex, colors[prevIndex])
    console.log('현재 선택한 색상', colors[index])
}

function highghtColorItem(colorIndex){
    if(colorIndex>=0 && colorIndex<colors.length){
        const colorItem = document.querySelectorAll('.color-item')[colorIndex] 
        colorItem.classList.add('highlight')
    }
}
function unsetHighLightItem(colorIndex){
    if(colorIndex>=0 && colorIndex<colors.length){
        const colorItem = document.querySelectorAll('.color-item')[colorIndex] 
        colorItem.classList.remove('highlight')
    }
}

function initHighlight(){
    //선택한 색상 하이라이트 해제 
    unsetHighLightItem(index)
    index= -1
    prevIndex= -1
}

function setBackground(color){
    colorInput.value = color
    colorList.classList.remove('show')
    colorBox.style.backgroundColor = color
    initHighlight()// 하이라이트 적용 초기화
    colorInput.removeEventListener('keyup', selectColor)
}
function setColor(e){
    if(e.target.className === 'color-item'){
        const pickedColor = e.target.innerText
       setBackground(pickedColor)
    }
}

addColors(colors)

colorInput.addEventListener('input', typeColor)
colorList.addEventListener('click',setColor)