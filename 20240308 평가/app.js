const container = document.querySelector('.container')
const navBtns = document.querySelectorAll('.navigation')
const lookBook = document.querySelector('.look-book')
const shop = document.querySelector('.shop')
const lastSeason = document.querySelector('.last-season')
const page = document.querySelector('#page')
const exitBtn = document.querySelector('.exit-button')
const lookBookOffset = lookBook.offsetTop
const shopOffset = shop.offsetTop
const lastSeasonOffset = lastSeason.offsetTop

const photo = document.querySelector('.photo')

const creditPage = document.querySelector('.slide')
const credit = document.querySelector('.credit-list')
const prevBtn = document.querySelector('.prev-button')
const nextBtn = document.querySelector('.next-button')
const modal = document.querySelector('.modal')

const lookAllBtn = document.getElementById('all-button')
const photoContainer = document.querySelector('.photo-container')
const photos = document.querySelectorAll('.photo')


function moveToRight(e){
    creditPage.style.marginLeft = -credit.offsetWidth + 'px'
    e.target.style.color = '#909090';
    prevBtn.style.color = '#fff'
    page.innerHTML ='2/2'
    prevBtn.addEventListener('click', moveToLeft)
}

function moveToLeft(e){
    creditPage.style.marginLeft = 0 + 'px'
    e.target.style.color = '#909090';
    page.innerHTML ='1/2'
    nextBtn.style.color = '#fff'
}



function moveToSection(e, ){
    for(let navBtn of navBtns){
        navBtn.style.backgroundColor = 'rgba(119, 119, 119, 0.418)'
    }
    const navHeight = e.target.offsetHeight
    if(e.target.id === 'lookBook'){
        e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.637)'
        window.scrollTo(0, lookBookOffset-navHeight)
    }else if(e.target.id === 'shop'){
        window.scrollTo(0, shopOffset-navHeight)
        e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.637)'
    }else if(e.target.id ==='lastSeason'){
        window.scrollTo(0, lastSeasonOffset+navHeight)
        e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.637)'
    }else if(e.target.id === 'runWay'){
        window.scrollTo(0, 0)
    }
    // console.log(e.target.id)
    // // console.log(e.target.id)


}
function makeEl(){
    for(let i=7; i<= 65; i++){
        let El = document.createElement('img')
        El.src = `imgs/model-${i}.jpg`
        El.className = "photo"
        photoContainer.appendChild(El)
    }
}
function hide(){
    lookAllBtn.photoContainer.style.height = ""
}
function reshow(lookAllBtn){
    photoContainer.style.height = ""
    lookAllBtn.className = "fixed"
    lookAllBtn.innerHTML = `<p>CLOSE</p>`
}

function closeLook(e){
    lookAllBtn.classList.remove('fixed')
    e.target.innerHTML = `<p>SEE ALL THE LOOKS</p>`
    photoContainer.style.height = (photo.clientHeight * 2 +10) + 'px'
    photoContainer.style.overflow = 'hidden'
    lookAllBtn.addEventListener('click', reshow)
}

function buttonChange(){
    lookAllBtn.classList.add('fixed')
    lookAllBtn.removeEventListener('click', openWholeLook)
    lookAllBtn.innerHTML = `<p>CLOSE</p>`
}

function openWholeLook(){
    makeEl()
    buttonChange()
    lookAllBtn.addEventListener('click', closeLook)

}

function closeModal(){
    modal.style.display = "none"
    document.body.style.overflow="auto"
    modal.removeChild(modal.lastChild)
}
function showDetail(e){
    modal.style.display = "block"
    document.body.style.overflow="hidden"
    console.log(e.target.src)
    let detailPhoto = document.createElement('img')

    detailPhoto.className = "modalImg"
    detailPhoto.src = `${e.target.src}`
    modal.appendChild(detailPhoto)
    exitBtn.addEventListener('click', closeModal)
}

lookAllBtn.addEventListener('click', openWholeLook)

nextBtn.addEventListener('click',moveToRight)

for(let navBtn of navBtns){
    navBtn.addEventListener('click', moveToSection)
}

for(let photo of photos){
    photo.addEventListener('click', showDetail)
}