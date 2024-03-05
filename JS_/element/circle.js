const container = document.querySelector('.container')
const items = document.querySelectorAll('.item')


const clientHeight = document.documentElement.clientHeight // 브라우저 높이

const Radius = 350

let scrollHeight = Math.max(    
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
    );

function scrollCircle(){
    container.style.transform = `transform: translate(-50%, -50%) rotate(${window.pageYOffset/(scrollHeight-clientHeight)*360}deg)` 
}

function degToRad(deg){
    return deg*(Math.PI/180)
}
// delta : degree 단위 > radian 단위

function setPosition(xc, yc, R, delta){
    const radian = degToRad(delta)
    return [R * Math.cos(radian)+xc , R*Math.sin(radian)+yc ]

}

function changeCenter(){
    const coords = container.getBoundingClientRect() // 컨테이너의 좌표 구하기
    const xcenter = (coords.right- coords.left) / 2 //x방향 중심점
    const ycenter = (coords.bottom - coords.top) / 2 //y방향 중심점
    return [xcenter, ycenter]
}

// 컨테이너의 중심 기준 아이템을 원의 형태로 배치
function circleItems(){
    const [xcenter, ycenter] = changeCenter() // 원의 중심을 다시 계산해주는 코드

    for(let i=0; i<items.length; i++){ // 아이템의 위치를 다시 계산하고 그려주는 코드
        const [x, y] = setPosition(xcenter, ycenter, Radius, 360/items.length*(i+1))
        items[i].style.left = x + 'px'
        items[i].style.top = y + 'px'
    }
}

circleItems()
window.addEventListener('scroll', scrollCircle)

window.addEventListener('resize',circleItems)