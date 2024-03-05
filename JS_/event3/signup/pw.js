const button = document.getElementById('pw-button')
const inputPw = document.getElementById('userpassword')
const userPw = inputPw.value

function checkPw(){

}


button.addEventListener('click', checkPw)



// const regExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,20}$/gi
// const userPw = inputPw.value
// console.log(userPw)
// if(!regExp.test(userPw)){
//     alert('대문자, 소문자, 숫자, 특수문자 포함 8-20자')
// }