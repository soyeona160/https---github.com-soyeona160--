
const agreeBtn = document.querySelector('button')
const pages = document.querySelectorAll('.document')
let count = 0


function checkTheBottomOfScrolling(e){
    addCheck(e)
    let documentHeight = e.target.clientHeight //요소의 높이
    let scrollTop = e.target.scrollTop //스크롤 y좌표
    let scrollHeight = e.target.scrollHeight; // 감춰진 영역 높이
    
    if(documentHeight + scrollTop >= scrollHeight){
        count++
        removeCheck(e)
    }
    if(count=3){
        agreeBtn.disabled = false
    }
}

for (let page of pages){
        page.addEventListener('scroll', checkTheBottomOfScrolling)
    }

function addCheck(e){
    e.target.addEventListener('scroll', checkTheBottomOfScrolling)
}
        
function removeCheck(e){
    e.target.removeEventListener('scroll', checkTheBottomOfScrolling)
}

