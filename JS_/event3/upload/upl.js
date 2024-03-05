const uploadBtn = document.getElementById('upload-button')
const upload = document.getElementById('file')
const imgContainer = document.getElementById('img-container')
const imgs = imgContainer.querySelectorAll('img')

function uploadImg(){
    upload.click()
    upload.addEventListener('change',displayImg)
}

function displayImg(e){
    console.log(e.target.files)
    
    for(let i=0; i<=e.target.files.length-1; i++){
        const file = e.target.files[i]
        const img = document.createElement('img')
        img.src=URL.createObjectURL(file)
        imgContainer.appendChild(img)
    }   
}
function highlightImg(e){
    e.target.style.width = '150%'
}


uploadBtn.addEventListener('click',uploadImg)
imgs.addEventListener('mouseover',highlightImg)