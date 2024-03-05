const character = document.querySelector('.box') 
const FPS = 60 // frame per sec
const gravity = 2 //중력가속도 
let vy = 0 //y방향 속도
let vx = 10

let isJumping = false // 스페이스 계속 못누르게 하기 위한 변수
let isDead = false
let jumpKey = false // 점프키 활성화 변수

const limitBottom = 500
const limitLeft = 700
const jumpHeight = 50

const down = (e) => {
    // console.log('down')

    const topStyle = character.offsetTop// character의 y방향 위치 조회
    let top = parseInt(topStyle)

    vy += gravity
    top += vy

    if(vy>=jumpHeight){
        jumpKey=false
    }
    if(isDead && !jumpKey && top > limitBottom + 700){
        alert('Game Over')
        clearInterval(timerId)
    }
    if(!isDead && top > limitBottom){ //땅에 안착
        top = limitBottom
        vy = 0
        isJumping = true
        jumpKey = true;
    }
    console.log('speed', vy)
    character.style.top = top+'px'
}

function move(e){
    let left = character.offsetLeft
    console.log(e.keyCode)
    if(e.keyCode === 39){
        character.style.backgroundImage = "(url('/imgs/super-mario-right.jpg');"
        left += vx
        if(left > limitLeft){
            isDead = true //죽는다
        }
    }else if(e.keyCode === 37){
        character.style.backgroundImage = "(url('/imgs/super-mario-left.jpg');"
        if(left>0){
            left -= vx
        }
    
    }else if(e.keyCode === 32 || e.keyCode === 38){
        if(isJumping){ // 땅에 있으면
            vy = -jumpHeight
            isJumping = false // 점프 끄기
        }
    }
    character.style.left = left +'px'
}

const timerId = setInterval(down ,1000/FPS)
window.addEventListener('keydown', move)
// window.addEventListener('keydown', jump)