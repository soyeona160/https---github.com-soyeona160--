const paragraph = document.querySelector('pre')
const text = paragraph.innerText //인트로 문구 저장
let isStarted = false
const scrollbarWidth = 50//
const maxFontSize = 30 //px단위
const widthOfBrowser = document.documentElement.clientWidth - (maxFontSize + scrollbarWidth) //브라우저 너비
let timer 

// 0~ 0.9999 소숫점 안에서 랜덤한 숫자를 뽑아주는 코드 
// Math.random() * n = 0부터 n보다 작은 소수 선택
// Math.floor : 소숫점 버림 
function pickRandomNumber(n){
    return Math.floor(Math.random() * n)
}
function pickRandomLetter(text){
    const randomIndex = pickRandomNumber(text.length)
    return text[randomIndex]
}

function createLetter(text, left, top){//생성할 문구, 글자 위치(x,y)
    console.log('creating letter. . .')
    const span = document.createElement('span')
    span.className = 'letter'
    span.style.left = left + 'px'
    span.style.fontSize =pickRandomNumber(maxFontSize) + 'px';
    span.innerText = pickRandomLetter(text)
    setTimeout(function(){
        span.style.color = 'rgba(255, 250, 205, 0.308)'
    },100)
    if(top){
        span.style.top = top+'px'
    }
    return span
}

function displayLetter(){//글자 생성
    if(timer){
        clearTimeout(timer)
    }//타이머 해제. 메모리에 계속 타이머가 쌓여서 성능이 느려짐

    const letter = createLetter(text, pickRandomNumber(widthOfBrowser))
    document.body.appendChild(letter)//랜덤글자 보여주기
    setInterval(()=>{
        letter.style.top = letter.offsetTop + 3 +'px'// 현재 y축 위치
        const cloneLetter = createLetter(text, letter.offsetLeft, letter.offsetTop)
        document.body.appendChild(cloneLetter)
    }, 100);
    // if(letter.style.top >= )
    timer = setTimeout(displayLetter, 100) // 재귀함수
}

// 휠 내리면 문구 사라지면서 텍스트 뜸
function startAnimation(){
    if(!isStarted){
        console.log('Pinocchio')
        isStarted = true
        paragraph.innerText = ''
        timer = setTimeout(displayLetter, 100)
    }
}

window.addEventListener('wheel', startAnimation)