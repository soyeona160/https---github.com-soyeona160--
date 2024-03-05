// // const div = document.creatieElement('div')
// // div.className = "container" // 속성 == 프로퍼티 = 키 (객체)
// // div.innerText = "Hello world!"

// // console.log(div)
// // console.dir(div) // 객체의 프로퍼티 목록을 출력 가능. 메서드 포함 

// // DOM 트리(부모와 자식관계)
// // 자바스크립트는 DOM 트리를 사용하여 DOM을 제어(검색, 변경)한다. 
// // DOM CRUD (CREATE READ UPDATE DELETE)
// // DOM 생성하기
// // const 요소 이름 = document.createElement('태그이름')
// // 원하는 태그를 생성해줌 


// // const div = document.createElement('div')
// // div.className = 'container'
// // div.innerHTML

// // const img = document.createElement('img')
// // img.src = "/imgs/1.jpg"
// // img.alt = "happy"
// // console.log(img)


// // DOM 객체의 프로퍼티
// // dir 써서 출력해보면 된다

// // const div = document.createElement('div')
// // div.className = "conatiner"
// // div.innerHTML = `<img src = '' alt=''/>\
// //                 <p>happy</p>`

// // console.dir(div) // DOM 객체의 프로퍼티와 메서드 조회

// // childElement: 자식요소 갯수
// // childNodes:공백도 하나의 노드로 여긴다
// // children: 자식요소 (img, p) // 리액트에서도 비슷한거 나옴
// // classList: 클래스 목록 // 자바스크립트로 css style 변경할 때
// // innerHTML: 추가한 문자열 그대로 
// // innerText : div 안에 있는 텍스트
// // tagName: 태그 이름
// // firstChild
// // firstElementChild 첫번째 자식요소

// // const div = document.createElement('div')
// // div.className = "parent"
// // div.innerText = "Hello world!"

// // const img = document.createElement('img')
// // img.className = "child"
// // img.src = "http://127.0.0.1:5500"
// // img.alt = "photo"

// // div.appendChild(img)

// // const p = document.createElement('p')
// // p.className = "summary"
// // p.innerText = "this is summary!"

// // div.appendChild(img)
// // div.appendChild(p)

// // console.log(div)

// // 자식요소 추가하는 방법 +
// // const div = document.createElement('div')
// // div.className = "parent"
// // div.innerHTML = `
// //                 "Hello world!"
// //                 <img class = "child" src="/imgs/1.jpg" alt = "photo"/>>
// //                 <p class = "summary"> this is summary! </p>


// // DOM은 메모리상에 존재. html에서는 보이지 않는다.
// // 브라우저 화면에 보이게 하려면 마운트해야한다. 

// // const div = document.createElement('div')
// // div.className = "child"
// // div.innerText = "Hello world!"

// // 조회해서 넣어야함


// // const root = document.getElementById('root')
// // root.appendChild(div)


// // const root = document.getElementById('root')
// // root.innerHTML = `<div class="child"> "Hello world! </div>`

// // const img = document.getElementById('photo')
// // console.log(img)


// // 마운트하고 조회?

// // 일단 생성 
// // const div = document.createElement('div')
// // div.className = "parent"
// // div.innerText = "Hello world!"

// // const img = document.createElement('img')
// // img.id = "photo"
// // img.src = "http://127.0.0.1:5500"
// // img.alt = "photo"

// // const p = document.createElement('p')
// // p.className = "summary"
// // p.innerText = "this is summary!"

// // // 생성한 div 하위요소 추가
// // div.appendChild(img)
// // div.appendChild(p)

// // // html 문서에 생성한 DOM이 삽입되기 전 img 태그를 검색한 경우
// // const photo = document.getElementById('photo')
// // console.log(photo)
// // // 검색 안되는거 맞음 마운트 하기 전에 검색하니까
// // // 마운트 하고 검색해라 

// // // 생성한 DOM을 HTML 문서에 마운트
// // const root = document.getElementById('root')
// // root.appendChild(div)

// // // 생성한 DOM을 삽입한 이후에 img 태그 검색 

// // const photo2 = document.getElementById('photo')
// // console.log(photo2)


// // 단점: id로 설정되지 않은거 아니면 검색할 수 없음
// // 클래스로 검색하는 법 : .querySelector('CSS 선택자')
// // 인자로 검색하고자 하는 요소의 css 선택자 주면 됨

// // window.onload = function(){ // 페이지 로드되고 검색되라고 
// //     const img = document.querySelector('#photo')
// //     console.log(img)

// // }


// // const img = document.getElementById('photo')
// // console.log(img)

// // const img = document.querySelector('#photo')
// // console.log(img)

// // parent 먼저 검색하고, 그 안의 img 검색 태그를 검색해야 하는 상황에서는 getElement는 어렵다

// const parent= document.querySelector('.parent')
// console.log(parent)

// const img = parent.querySelector('#photo')
// console.log(img)
// // 실무에서는...페이지 하나가 몇 만줄 된다 생각해보자
// // 중간에 태그가 있을거임
// // querySelector 쓰면 시간 단축이 가능 

// // 리스트 같이 공통되는걸 찾을 때
// // document.querySelectorAll('CSS선택자')
// // return 값은 [배열]

// // 변수에 s붙임 : 배열(리스트)
// const photos = document.querySelectorAll('.photo-item')
// // 클래스 선택자 하나하나 치면 html이랑 다르게칠수고있으니 그냥복붙해라
// const imgs = document.querySelectorAll('.photo-item img')
// console.log(imgs)

// // 소스 속성 조회
// console.log(imgs[0].src) // 배열의 element의 index : 0부터 시작
// // imgs[0] : 돔 객체라 소스 출력 가능

// // 전체 이미지 조회
// for(let img of imgs){
//     console.log(img)
// }
// // for of문

// // .getElementsByClassName('photo-item') > 반환값: 배열

// const imgs = document.getElementsByTagName('img')
// for(let img of imgs){
//     console.log(img)
// }

// // 부모요소에서 검색
// const photos = document.querySelectorAll('.photo-item')
// console.log

// // root.div에서 찾고싶으면

// console.log(photos[0].closest('#photo-container'))

// // 부모요소의 자식요소들 전부 검색 
// 부모요소.children 
// const parent = document.querySelector('.parent')
// console.log(parent.children)
// 태그 없는 text도 같이 쓰고 싶다
// console.log(parent.childNodes) 
// //해당 부모 요소의 모든 자식 node 조회(문자열, 태그, 공백문자 포함 )
// console.log(parent.firstElementChild)
// console.log(parent.firstChild)

// console.log(parent.nextElementSilbling)
// console.log(parent.nextSilbling)

// // 검색한 DOM 객체의 속성 조회

// // input value값 변경
// const searchInput = document.getElementById('search')
// searchInput.valur = 'Input value is updated!'


// // DOM 제거하기
// Element.remove() // remove 메서드 사용


// const paragraph = document.querySelector('.summary')
// paragraph.style.backgroundColor = 'tan'
// paragraph.style.padding = '15px'
// paragraph.style.margin = '100px auto'
// paragraph.style.width = '300px'
// paragraph.style.height = '100px'
// paragraph.style.lineHeight= '100px'
// paragraph.style.textAligh = 'center'
// paragraph.style.color = 'white'
// paragraph.style.fontWeight = 'bold'
// paragraph.style.fontSize = '1.5rem'
// paragraph.style.borderRadius = '15px'

// paragrapg.classList.add('contents')