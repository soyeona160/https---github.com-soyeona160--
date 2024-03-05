const lists = document.querySelectorAll('.list')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
let i = 0

function prevlist(){
    i-=2
    console.log(i)
    let coords = lists[i].getBoundingClientRect()
    let coordsBottom = coords.bottom  - window.pageYOffset
    window.scrollTo({top:coordsBottom, behavior: 'smooth'})
    // lists[i].scrollIntoView(true)
}
function nextlist(){
    i+=2
    let coords = lists[i].getBoundingClientRect()
    let coordsTop = coords.top + window.pageYOffset
    window.scrollTo({top:coordsTop, behavior: 'smooth'})
    prev.addEventListener('click', prevlist)
}


next.addEventListener('click', nextlist)
// prev.addEventListener('click', prevlist)