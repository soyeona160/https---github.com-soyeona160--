const main = document.querySelector('main')
const sections = document.querySelectorAll('section')
let timer, angle = 0 //degree
let index = 0 //현재 슬라이드 
const speedOfSlide = 0.2 // speed

function throttling(handler, e){
    if(!timer){
        timer = setTimeout(function(){
            handler(e)
            timer = null
        }, 100)
    }
}

function initializeStyle(sections){
    for(let i = 0; i<sections.length; i++){
        const section = sections[i]
        section.style.opacity = '0'
        section.style.transform = 'translateY(-50%)'
        section.style.transition = 'none'//다음 슬라이드 나올 때 갑자기 회전하는것 방지
    }
}

function changeSlide(e){ //90도 근처에서만 인덱스값 증가
    console.log('scroll', e.deltaY) // 내리면 +100, 올리면 -100

    if(e.deltaY>0){
        angle += parseInt(e.deltaY * speedOfSlide) 
        console.log(angle)

        if(Math.abs(angle > 360)){
            angle = 0
            initializeStyle(sections)
        }
        if(angle === 120){
            angle += 160 //다음 슬라이드의 위상은 270도에서 시작
            index++

            if(index > sections.length - 1 ){
                index = 0
            }
            // 기존 슬라이드를 숨기고 트랜지션을 잠깐 제거하기
            setTimeout(initializeStyle(sections), 60)
        }

    }

    const section = sections[index]
    section.style.opacity = '1'
    section.style.transform = `translateX(-50%) rotateX(${parseInt(angle)}deg)`

    setTimeout(function(){
        section.style.transition = '1s ease-in-out'
    }
    ,50)
}



document.addEventListener('wheel', (e)=> throttling(changeSlide, e))