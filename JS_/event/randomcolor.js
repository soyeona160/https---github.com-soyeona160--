// const tiles = document.querySelectorAll('.tile')
// const random = document.getElementById('random')


// function randomTile(e){
//     console.log(e.target)
//     let r = Math.floor(Math.random()*256)
//     let g = Math.floor(Math.random()*256)
//     let b = Math.floor(Math.random()*256)
//     e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// }


// function randomAll(e){
//     console.log(e.target)
//     let r = Math.floor(Math.random()*256)
//     let g = Math.floor(Math.random()*256)
//     let b = Math.floor(Math.random()*256)
//     tiles.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// }
// for(let tile of tiles){
//     tile.addEventListener('click', randomTile)
//     random.addEventListener('click', randomAll)
// }
// for(let tile of tiles){
//     random.addEventListener('click', randomAll)
// }


const tiles = document.querySelectorAll('.tile')
const random = document.getElementById('random')


function randomTile(e){
    console.log(e.target)
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}


function randomAll(e){
    console.log(e.target)
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    tiles.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}
for(let tile of tiles){
    tile.addEventListener('click', randomTile)
    random.addEventListener('click', randomAll)
}