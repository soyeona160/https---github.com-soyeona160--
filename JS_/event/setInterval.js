const timer = document.getElementById('timer')
let count= 0;
function getCount(){
    count += 1;
    timer.innerHTML = `${count}`
}

setInterval(getCount,1000)


const lyrics = '이제야 만난 나의 작은 별'
console.log(lyrics)

const timerId = setInterval(함수, 시간간격)
clearInterval(timerId)