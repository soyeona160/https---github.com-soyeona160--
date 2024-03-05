// const clock = document.getElementById('clock')

// function changeFormat(t){ //t:파라미터
//     return t < 10 ? `0${t}` : t;
// }


// function getTime(){
//     const time = new Date()//현재 시각은 js에서 기본 제공
//     // console.log(time)
//     // console.dir(time)//객체의 프로퍼티 조회

//     const hours = time.getHours()
//     const minutes= time.getMinutes()
//     const seconds = time.getSeconds()
//     // 마운트

//     // hours: arguments(인자) - 함수 실행(괄호)시 함수 안으로 전달해주는 값 
//     clock.innerHTML = `${changeFormat(hours)} : ${changeFormat(minutes)} ${changeFormat(seconds)}`
// }
// setInterval(getTime, 1000)
// // `${hours} : ${minutes} ${seconds}`


// const circle = document.getElementById('circle')

// function moveCircle(e){
//     console.log(e.clientX, e.clientY)//클릭한 마우스 포인트
//     circle.style.left = e.clientX +'px'
//     circle.style.top = e.clientY +'px'
// }

// window.addEventListener('mousemove',moveCircle)// 브라우저 클릭 감지

// 마우스 오버 시 LED 깜빡 

// const ledContainer = document.querySelector('.led-container')
// const leds = document.querySelectorAll('.led')

// function lightOn(e){
//     console.log(e.target)
//     console.log(e.target.className)
//     // e.target.classList.add('on')
//     if(e.target.className === 'led'){
//         e.target.classList.add('on');
//     }
// }

// function lightOff(e){
//     console.log(e.target)
//     console.log(e.target.className)
//     // e.target.classList.remove('on')
//     const onLed = ledContainer.querySelector('.on')
//     onLed.classList.remove('on')
//     // if(e.target.className === 'led-container'){
//     //     e.target.classList.remove('on')
//     // }
// }

// // 이벤트 위임
// ledContainer.addEventListener('mouseover', lightOn) 


// // 다수의 class 개별 선택
// // for(let led of leds){
// //     led.addEventListener('mouseover', lightOn)
//     ledContainer.addEventListener('mouseleave', lightOff)
// // }

// 웹화면 로딩 시 led 깜빡이기 
// let index = 0 //특정 led를 석택하기 위한 인덱스(배열)

// function lightOff(){
//     const led = document.querySelector('.on') //on클래스 있는거 찾기
//     if(led) led.classList.remove('on')
// }


// function lightOn(){
//     lightOff()
//     // 기존에 켜져있는 것 off

//     const leds = document.querySelectorAll('.led')//배열
//     leds[index].classList.add('on')//DOM 객체에 클래스 리스트 추가. 현재 인덱스의 led on
//     // 다음 led를 선택하기 위한 index값 증가
//     index++
//     if(index > leds.length - 1){
//         index = 0 //led 개수 넘을 시 인덱스값 초기화


// }

// function startEffect(){
//     setInterval(lightOn,1000)// turn on-off for 1s
// }

// window.addEventListener('load', startEffect)


// const openBtn = document.getElementById('open-btn')
// const sidebar = document.querySelector('.sidebar')
// const menus = document.querySelectorAll('.menu')

// function openSidebar(e){
//     e.stopPropagation()//이벤트 버블링 방지
//     console.log('button')
//     sidebar.classList.add('show')
// }

// function closeSidebar(e){
//     if(e.target.classList.contains('menu')){
//         sidebar.classList.remove('show')
//         //classList의 메서드를 이용해서 더 간단히 표현하기
//     }
// }

// function hideSidebar(e){
//     console.log('browser')
//     // 닫긴 닫는데 열려있을 때 닫아야 하니까 열려있는지 check
//     console.log(sidebar.classList.contains('show'))
//     console.log(sidebar.contains(e.target))// 현재 클릭한 포인트가 사이드 바 내부 영역인지 체크
//     //조건 2개 주기
//     //1. 사이드 바 열려있을 때
//     if(sidebar.classList.contains('show')&&!sidebar.contains(e.target)){//브라우저 이외의 영역
//         sidebar.classList.remove('show')
//     }
//     if(sidebar.classList.contains('show')&&sidebar.contains(e.target)){//메뉴 클릭
//         sidebar.classList.remove('show')
//     }
// }

// function hideSidebar(){
//     sidebar.classList.remove('show')
// }

// openBtn.addEventListener('click', openSidebar)

// //버튼이 올라갔을 때 열리게 하는 방법 
// // openBtn.addEventListener('mouseenter', openSidebar)


// //메뉴 클릭 시 사이드바 닫히게 ~ 이벤트 위임

// // sidebar.addEventListener('click', closeSidebar)


// // 메뉴 말고 다른 영역 눌렀을 때 닫히게 하기
// document.addEventListener('click', hideSidebar)


// for(let menu of menus){
//     menu.addEventListener('click',hideSidebar)
// }

// //document의 자식요소. 그거 실행되고 부모요소의 함수가 한 번 더 실행되는거임


// // 사진 슬라이드
// // index값으로 코드 간략화하기
// const photoContainer = document.getElementById('photo-container')
// const photos = document.getElementById('photos')
// const widthOfPhoto = 500 //단위 px: 사진 너비
// let marginLeft = widthOfPhoto //사진 이동 간격
// let timerId = null //타이머 id
// const photosLength = photos.querySelectorAll('.photo').length
// //사진 개수 조회
// const selection = document.getElementById('selection')
// // 기존에 active된 인디케이터 해제
// let index = 0 //사진 선택을 위한 인덱스값


// function startCarousel(){
//     timerId = setInterval(changePosition, 1000)
// }
// function stopCarousel(){
//     clearInterval(timerId)
// }

// function changeIndicator(index){
//     const activeOption = selection.querySelector('.active')
//     if(activeOption) activeOption.classList.remove('active')
    
//     // 현재 인덱스에 대한 인디케이터 액티브 적용 
//     selection.querySelectorAll('.options')[index].classList.add('active')
// }

// function changePosition(){
//     index++
//     if(index > photosLength - 1){
//         index = 0
//     }

//     photos.style.marginLeft = index*widthOfPhoto*-1 + 'px'

//     changeIndicator(index)
// }


// photoContainer.addEventListener('mouseenter',startCarousel)
// photoContainer.addEventListener('mouseleave',stopCarousel)

// //갑자기 1로 확 돌아가는거 고치기 


// //슬라이드 밑에 원형 표시