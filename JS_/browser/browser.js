const quizContainer = document.querySelector('.quiz-container')
let index = 0 // 문제 번호 
let score = 0 // 점수
const mathProblems = [//산수 문제 리스트 (데이터 모델링)
    {
        query: '3 + 3 = ?',
        examples:[7, 2, 6, -6],
        answer: 6
    },
    {
        query: '9 * 4 = ?',
        examples:[37, 32, 36, -36],
        answer: 36
    },
    {
        query: '28 / 2 = ?',
        examples:[7, 12, 16, 14],
        answer: 14
    },
    {
        query: '18 - 31 = ?',
        examples:[-13, -12, -16, -14],
        answer: -13
    },
    {
        query: '(3 + 4) * 7 = ?',
        examples:[47, 42, 49, 28],
        answer: 49
    }

]

function showPrompt(problem){
    const answer = prompt(`${problem.query}에 대한 답을 입력`, 0)
    if(parseInt(answer) === problem.answer){
        score += 20
    }else{
        alert('정답이 아닙니다')
    }
    console.log(score)
    index++
    if(index > mathProblems.length -1){
        alert(`score : ${score}`)
        document.getElementById("answer-btn").disabled = true
        return;
    }else{//더 보여줄 문제가 남아 있는 경우
        displayQuiz(mathProblems[index]) // 재귀함수
    }
}

function displayQuiz(problem){ // 마운트 완료. 조회 가능 
    quizContainer.innerHTML = `
        <p class="question">${problem.query}</p>
        <ol>
            <li>${problem.examples[0]}</li>
            <li>${problem.examples[1]}</li>
            <li>${problem.examples[2]}</li>
            <li>${problem.examples[3]}</li>
        </ol>
        <input type="button" value="정답 입력" id="answer-btn">
    `
    //innerHTML 사용시 유의
    // innerHTML 사용 시 동적으로 등록된 이벤트핸들러 함수는 innerHTML 컨텐츠가 변경되면 등록되어 있던 이벤트핸들러가 자동으로 삭제됨 
    // innerHTML이 갱신될 때마다 버튼도 갱신돼야 함
    document.getElementById("answer-btn").addEventListener('click', ()=> showPrompt(problem))
}

displayQuiz(mathProblems[index])