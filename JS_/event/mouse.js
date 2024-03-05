const up = document.querySelector('.up')
// const clickUp = document.createElement('div.up')

function addUp(e){
    const createUp = document.createElement('div')
    const clickUp = document.body.appendChild('.up');
    console.log(e.clientX, e.clientY)
    up.style.left = e.clientX+'px'
    up.style.top = e.clientY+'px'
}
window.addEventListener('click', addUp)