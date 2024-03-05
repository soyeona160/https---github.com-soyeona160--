// 연산자, 조건문 문제

//  연산자

1. 아래 코드가 실행된 후, 변수 a, b, c, d엔 각각 어떤 값들이 저장될까요?

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?

a= 2, b= 2 c= 2 d= 1
// 단항 연산자가 후위에 오면 먼저 다른 연산을 수행한 후, 피연산자의 값을 변화하기 때문에 d만 1이다.

2. 아래 코드가 실행되고 난 후, a와 x엔 각각 어떤 값이 저장될까요?

let a = 2;

let x = 1 + (a *= 2);

a= 4, x= 5
// 소괄호 안이 최우선. a에 2를 곱한 값이 a에 할당. 이후 1+a(4) 예산으로 x=5가 된다.

3. 표현식 결과 예측
"" + 1 + 0 // "10"

"" - 1 + 0 // -1

true + false // 1

6 / "3" // 2

"2" * "3" // NaN

4 + 5 + "px" // 9px

"$" + 4 + 5 // $45

"4" - 2 // 2

"4px" - 2 // NaN

7 / 0 // 0

"  -9  " + 5 // -4

"  -9  " - 5 // -14

null + 1 // 1

undefined + 1 // NaN

" \t \n" - 2 // -2

4. 아래 코드는 사용자에게 숫자 2개를 입력받은 다음 그 합을 보여줍니다.

그런데 의도한 대로 예시가 동작하지 않습니다. 프롬프트 창에 세팅한 기본값을 수정하지 않은 경우 덧셈의 결과는 12가 됩니다.

왜 그럴까요? 예시가 제대로 동작하도록 코드를 수정해 보세요. 결과는 3이 되어야 합니다.

let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

alert(a + b); // 12

// 입력한 값이 문자열이기 때문
// 입력한 값을 숫자 타입으로 변환해 할당하면 됨

let a = Number(prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1));
let b = Number(prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2));console.log(a + b); //3


5. 비교 연산자 표현식들의 결과를 예측해보세요.
5 > 4 // true
"apple" > "pineapple" // true
"2" > "12" // true
undefined == null // true
undefined === null //false
null == "\n0\n" // false
null === +"\n0\n" // false


6. alert( null || 2 || undefined ); // 2

7. alert( alert(1) || 2 || alert(3) ); // alert(1)

8. alert( 1 && null && 2 ); // null

9. alert( alert(1) && alert(2) ); //2

10. alert( null || 2 && 3 || 4 ); // 3

11. 조건문 작성하기;
// 조건
//  age(나이)가 14세 이상 90세 이하에 속하는지를 확인하는 if문을 작성하세요.

// "이상과 이하"는 age(나이) 범위에 14나 90이 포함된다는 의미입니다.

let age;
if(age>=14){
    if(age<=90){
        console.log('14세 이상 90세 이하입니다.');
    }else{
        console.log('90세 초과입니다.');
    }
}else{
    console.log('14세 미만입니다.');
}



12. 조건문 작성하기
// age(나이)가 14세 이상 90세 이하에 속하지 않는지를 확인하는 if문을 작성하세요.

// 답안은 NOT ! 연산자를 사용한 답안과 사용하지 않은 답안 2가지를 제출해 주세요.

let age;
if(age>=14){
    if(age<=90){
        console.log('14세 이상 90세 이하입니다.');
    }else{
        console.log('14세 이상 90세 이하에 속하지 않습니다.');
    }
}else{
    console.log('14세 이상 90세 이하에 속하지 않습니다.');
}


let age;
if(!(age>=14)){
    console.log('14세 미만입니다.')
}else if(!(age<=90)){
    console.log('90세 초과입니다.')
}else{
    console.log('14세 이상 90세 이하입니다.')
}

// 부정논리연산자 쓸 때는 적용할 표현식 괄호로 감싸기~ 

13. 아래 표현식에서 어떤 alert가 실행될까요?

if(...) 안에 표현식이 있으면 어떤 일이 일어날까요?


if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );


// 조건문

1. prompt 함수로 평점에 대한 사용자 입력을 받고, if 조건문을 사용하여 평점만들기 과제 1~5점 사이의 평점을 콘솔창에 별표로 보여주세요.


let grade = prompt('평점을 입력하세요', '')
let star = '★'
if( grade >= 1 ){
    if(grade <= 5){
        for(var i=1; i < grade; i++){
           star += '★';
        }
        console.log('평점:'+ star);
    }
}else{
    alert('유효하지 않은 평점입니다.');
}

2. prompt 함수로 평점에 대한 사용자 입력을 받고, switch 조건문을 사용하여 평점만들기 과제 1~5점 사이의 평점을 콘솔창에 별표로 보여주세요. 

let grade = Number(prompt('평점을 입력하세요', ''));
switch(grade){
    case 1:
        console.log('평점:★');
        break;
    case 2:
        console.log('평점:★★');
        break;
    case 3:
        console.log('평점:★★★');
        break;
    case 4:
        console.log('평점:★★★★');
        break;
    case 5:
        console.log('평점:★★★★★');
        break;
    default:
        console.log('유효하지 않은 평점입니다.');
}


3. 코드 수정하기

let a = 3;

switch (true) {
  case (a > 3):
    case (a > 10): 
        alert('10보다 크다!')
        break;
        alert('3보다 크다!')
        break;
  default:
    alert('3보다 작거나 같다.')
}


4. prompt 함수로 점수에 대한 사용자 입력을 받고, 점수환산 기준 테이블을 참고하여 점수에 대한 성취기준을 콘솔창에 출력하세요! 

let score = parseInt(prompt('점수를 입력하세요.', ''));
if(Number.isInteger(score) === 'true'){
    if(score>=0){
        if(score < 60 ){
            console.log('Fail')
        }else if(score < 70){
            console.log('성취기준: 1')
        }else if(score < 80){
            console.log('성취기준: 2')
        }else if(score < 90){
            console.log('성취기준: 3')
        }else if(score <= 100){
            console.log('성취기준: 5')
        }else{
            alert('잘못된 점수입니다.')
        }
    }
}else{
    alert('잘못된 점수입니다.');
}


5. 2인용 가위바위보 게임

let player1 = '가위'
let player2 = '바위'

if(player1 === '가위'){
    if(player2 === '가위'){
        console.log('무승부')
    }else if(player2 === '바위'){
        console.log('player2 우승')
    }else{
        console.log('player1 우승')
    }

}else if(player1 === '바위'){
    if(player2 === '가위'){
        console.log('player1 우승')
    }else if(player2 === '바위'){
        console.log('무승부')
    }else{
        console.log('player2 우승')
    }

}else if(player1 === '보'){
    if(player2 === '가위'){
        console.log('player2 우승')
    }else if(player2 === '바위'){
        console.log('player1 우승')
    }else{
        console.log('무승부')
    }
}