const pageContents = [] // 데이터를 담고 있는 배열
const numOfData = 100 // 전체 리스트 수
const limit = 4 // 페이지당 보여줄 리스트 수
const numOfBtns = Math.ceil(numOfData / limit)

const btnContainer = document.getElementById('btn-container') // qj
let offset = 0
console.log(numOfBtns)

const contents = document.getElementById('contents')
const pageBtns = document.getElementById('page-btns')

// 리스트 배열 만들기
for(let i=0;i<numOfData;i++){
    pageContents.push({ name: 'sunrise', age: 20, id: i })
}
console.log(pageContents)

// 화면에 페이지네이션 버튼 보여주기
function setBtn (){
    if 

    for(let i=0;i<numOfBtns;i++){
        const btn = document.createElement('button')
        btn.className = 'page-btn'
        btn.innerText = i + 1
    
        pageBtns.appendChild(btn)
    }
}

// 첫페이지 로딩
for(let i=offset; i<offset+limit; i++){
    const listItem = pageContents[i]
    contents.innerHTML += `
                <div id=${listItem.id} class='list-item'>
                    <h3>${listItem.name} (${listItem.id})</h3>
                    <h3>${listItem.age}</h3>
                </div>
            `
}

function changePage(e){
    const target = e.target
    if(target.className === 'page-btn'){
        console.log(target)
        const indexSelected = parseInt(target.innerText) - 1
        console.log(indexSelected)
        offset = limit * indexSelected
        console.log(offset) // 콘텐츠 시작점(오프셋) = (페이지번호 - 1) x 페이지당 보여줄 갯수

        const listSelected = []
        // offset ~ offset + limit - 1 까지의 리스트만 추출하기
        for(let i=offset; i<offset + limit;i++){
            const item = pageContents[i]
            listSelected.push(item)
        }
        console.log(listSelected)

        // 화면 초기화
        contents.innerHTML = ''

        // 화면에 특정 페이지 리스트만 보여주기
        for(let listItem of listSelected){
            contents.innerHTML += `
                <div id=${listItem.id} class='list-item'>
                    <h3>${listItem.name} (${listItem.id})</h3>
                    <h3>${listItem.age}</h3>
                </div>
            `
        }
    }
}

pageBtns.addEventListener('click', changePage)