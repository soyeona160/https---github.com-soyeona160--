const container =document.querySelector('.container')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let index = 1; // 사진 선택을 위한 인덱스값

function moveToRight(e){
    index--
    container.style.marginLeft = (-1 * index * 50) + 'vw' //다음 사진으로 이동

    if(index === 0){
        // console.log('fine')
        setTimeout(function(){
            container.style.transition = "none"
            container.style.opacity = "0"
            index = 5;
            container.style.marginLeft = (-1 * index * 50) + 'vw'
            container.style.opacity = "1"
            setTimeout(function(){
                container.style.transition = ".5s ease-in-out"}, 100)
        },500)
    }
}

function moveToLeft(e){
    index++
    container.style.marginLeft = (-1 * index * 50) + 'vw' //다음 사진으로 이동

    if(index===6){
        // console.log('fine')
        setTimeout(function(){
            container.style.transition = "none"
            container.style.opacity = "0"
            index = 1;
            container.style.marginLeft = (-1 * index * 50) + 'vw'
            container.style.opacity = "1"
            setTimeout(function(){
                container.style.transition = ".5s ease-in-out"}, 100)
        },500)
    }
}






prev.addEventListener('click', moveToRight)
next.addEventListener('click', moveToLeft)
