let accessAllowed
let age = prompt('나이를 입력해 주세요.','')

if (age> 18){
    accessAllowed=true
} else{
    accessAllowed=false
}

alert(accessAllowed)


// 삼항 조건 연산자
let accessAllowed = (age > 18) ? true: false;
참이면 왼쪽 실행 / 거짓이면 오른쪽 실행
alert(accessAllowed)

let accessAllowed = age > 18
alert(accessAllowed)


리액트에서 많이 쓰임

// 복잡하게 쓴 경우

let msg = (age<3)? '아가야 안녕?' : 
            (age < 18)? '안녕?' :
            (age < 100)? '환영합니다' : 
            '재입력'

alert(msg)

let age = prompt('나이를 입력해주세요',18)
// parseInt나 +로 숫자타입으로 변경해준 뒤 비교하는게 좋다
let messge

if(age<3){
    message= '아기상어 뚜루뚜뚜루'
}else if(age<18){
    message= '환영합니다 '
}else if(age<100){
    message = '새해 복 많이 받으세요'
}else {
    message = '건강하세요'
}

alert(message);


let company = prompt('자바스크립트는 어떤 회사가 만들었을까요?','');

(company == 'Netscape') ? alert('정답') : alert('오답');

// 별로 좋지 않은 습관. 코드가독성이 좋지 않음

let a = 2 + 2

switch (a) {
    case 3:
        alert('비교하려는 값보다 작습니다.')
        break;
    case 4:
        alert('비교하려는 값과 일치합니다.')
        break;
    case 5:
        alert('비교하려는 값보다 큽니다.')
    default:
        alert('어떤 값인지 파악되지 않습니다.')
}

let q = "1"
let w = 0

switch(+q){
    case w+1:
        alert('표현식 +q는 1, 표현식 w+1은 1이므로 결국 코드가 실행됨')
        break;
    default:
        alert('코드 실행 안됨')
}


let e = 3
switch (e){
    case 4:
        alert('계산이 맞습니다')
        break;
    case 3:
    case 5:
        alert('계산이 틀립니다')
        alert('다시 한 번 계산해 보세요')
        break;
    default:
        alert('문제를 한 번 더 읽어보세요.')
}

let weather = "맑음"

switch (weather){
    case '구름':
        alert('흐리다')
        break;
    case '맑음':
        alert('따뜻하다')
        break;
    case '비':
        alert('축축하다')
        break;
    default:
        alert('집에가고싶다')
}

let arg = prompt("값을 입력하세요.")
switch(arg){
    case '0':
    case '1':
        alert('0이나 1을 입력하셨습니다.')
        break;
    
    case '2':
        alert('2 입력')
        break;
    case 3:
        alert('실행되지 않음')
        break;
    default:
        alert('알 수 없는 값')
}

// 중첩 조건문 (로그인 로직 간단 구현)
let userName = 'Yeona'
let pw = '1'

if (userName === 'Yeona'){
    if (pw === '1'){
        console.log('welcome')
    }else {
        console.log('일치하지 않는 pw')
    }
}else {
    console.log('존재하지 않는 계정명')
}