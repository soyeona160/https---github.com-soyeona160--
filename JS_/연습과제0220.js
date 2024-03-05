// 제어문
// 1. 마지막에 출력되는 값 
// let i = 7;

// while (i) {
//   alert( i-- );
// }
// 1

// 2. 해당 코드를 실행할때 순차적으로 출력되는 값을 예상해보고, 조건문으로 다시 작성해보세요! (코드실행 X)
// 1 2 3 4
// let i = 0;
// if( ++i < 5 ){
//     alert(i)
//     i++
    
// }




// 6. 홀수 출력
// let n = prompt('숫자 입력','')

// for{
    
// }

// let n = prompt('숫자 입력', '')

// for{

// }




// if(n > 1){
//     for(var i = 1 ; i <= n ; i++){
//         if(i % 2 === 1){
//             console.log(i)
//         }
//     }
// } else if(n<=1){
//    for(n=1;)
//    {n =prompt('숫자 입력','')}
// }

// 소수 구하기


// let n = prompt('숫자 입력','')
// if(n > 1){
//     for (let i = 2; i <= Math.sqrt(n); i++){
//         if(n % i === 1 ){
//             console.log(n)
//         }
//     }
// }else {
//     while(n<=1){
//         n = prompt('숫자 입력','')
//     }
// }


let n = +prompt('숫자입력', '')
let answer = []
let flag = 0;

if(n > 1){
    for(var i=2; i<=n; i++){
        for(var a = 2; a <= Math.sqrt(i); a++){
            if(i % a === 0){
                break;
            }
        } 
    }

}else{
    while(n <= 1){
        n = +prompt('숫자 입력','')
    }
}

console.log(answer)

let n = +prompt('숫자입력', '')
let answer = []

function allPrime(n){
    for(let i=2; i<=n; i++){
        for(let a=2; a<= Math.sqrt(i); a++){
            if(i % a == 0){
                return false;
            }
        }
        return true;
    }
}
