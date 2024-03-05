
let answer = '';

function allPrime(n){
        for(i = 2; i<n; i++){ // 2부터 n사이의 자연수 i
            for(a = 2; a <= Math.sqrt(i); i++){ // i의 제곱근까지의 범위 a로 나눈다.
                if(i % a === 0){
                    continue;
                } 
                break;
            }
            answer += `${i}`
        }
        return answer;
}

while(true) {
n = Number(prompt('숫자 입력하기',''))
3
if(n>1) break;
}

answer = allPrime(n);
console.log(answer)     