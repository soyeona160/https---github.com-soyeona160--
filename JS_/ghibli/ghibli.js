const main = document.querySelector('main')
const sections = main.querySelectorAll('section')
const clientHeight = document.documentElement.clientHeight // 브라우저 높이
const scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
)
const scrollRange = scrollHeight - clientHeight // 세로방향 스크롤 범위
const scrollRangeOfOneSection = scrollRange / (sections.length - 1) // 하나의 섹션에 대한 스크롤 범위
let index = 0, timer



// 1초동안 이벤트 금지하기 (자연스러운 슬라이드 효과 연출)
function throttling(handler, e){
  if(!timer){
    timer = setTimeout(function(){
      handler(e)
      timer = null 
    }, 500)
  }
}


function changeSlide(e){
    console.log('스크롤', e.deltaY)

    if(e.deltaY > 0){ // 스크롤을 내린 경우
        index++
        if(index > sections.length - 1) index = 0
    }else{ // 스크롤을 올린 경우
        index--
        if(index < 0) index = sections.length - 1
    }
    console.log(index)

    for(let i=0; i<sections.length; i++){
        if(index !== i){
            const section = sections[i]
            section.style.transition = 'none'
            
            setTimeout(function(){
                section.style.opacity = '0'
                section.style.height = '0'
                section.style.transition = '.5s ease-in-out'
            }, 500)
        }
    }

    const section = sections[index]
    section.style.opacity = '1'
    section.style.height = '100vh'
}

// 섹션에 애니메이션 적용하기 
document.addEventListener('wheel', (e) => throttling(changeSlide, e))