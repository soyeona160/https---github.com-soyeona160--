// 1. 매장의 소파 가격

let sofa 
sofa=360000

// 2. 사이즈

let size
size = 275

// 3. 원주율

const pi = 3.141592

// 4. 문구 출력하기
const name = "yeona"
const msg = "Happy halloween,"

console.log(msg + name)

// 5. 메시지 출력 에러 해결
const letter = 'Dear yeona. \n\
Hello, syleemomo ^^ \n\
My name is kiki. Your sincere friend \n\
How are you thesedays? \n\
Are you busy or not? \n\
I guess you haven\'t sleep much last night \n\
I am spending good day thesedays ! \n\
I hope to see you soon. See you later :)'

console.log(letter)

// 해결법: 이스케이프 시퀀스를 사용한다

// 6. 좋아하는 음식 배열

let foodTaste = ['strawberry', 'whopper', 'VanillaCreamColdBrew']
console.log(foodTaste)

// 7. 가장 좋아하는 한가지 음식을 객체로. 객체의 프로퍼티 음식 이름, 가격, 종류

let favoriteFood={
    name: VanillaCreamColdBrew,
    price:5800,
    type: coffee
}


console.log(favoriteFood)

// 8. 상수 데이터 타입 검사

const hoursForDay = 24
const bookName = "Harry Potter"
const isChecked = true

console.log(typeof hoursForDay)
console.log(typeof bookName)
console.log(typeof isChecked)

// 9. 상수 객체 배열 검사

const cities = ["seoul", "deagu", "busan"]
const bookInfo = {
    name: 'Harry Potter',
    price: 17000,
    author: 'J.K Rolling'
}

console.log(Array.isArray(cities))
console.log(Array.isArray(bookInfo))

// cities만 배열이고, bookInfo는 배열이 아니라는 결과
console.log(typeof bookInfo)

// 10. 정수형 실수형 자료형 검사

const distanceSeoulToBusan = 370
const sizeOfYourHeight = 275.9

console.log(Number.isInteger(distanceSeoulToBusan))
console.log(Number.isInteger(sizeOfYourHeight))

// 11. 숫자형 변환
const speedOfCar = "37.5 m/s"
const heightOfYourFriend = "289 cm"

const heightOfYourFriend_casted = Number(heightOfYourFriend)
const speedOfCar_casted= Number(speedOfCar)


// 12. 상수값 문자열 타입 전환
const heightOfMe = 289
const temperature = 13.9
const fruits = ["apple", "banana", "orange"]

const heightOfMe_casted = heightOfMe + ''
const temperature_casted = temperature + ""

console.log(heightOfMe_casted)
console.log(temperature_casted)
// 문자열 연산자 연결

const temperature_casted2 = temperature.toString()
const heightOfMe_casted2 = heightOfMe.toString()
const fruits_casted = fruits.toString()

console.log(temperature_casted2)
console.log(heightOfMe_casted2)
console.log(fruits_casted)
// Objecy.prototype.toString 사용

const temperature_casted3 = String(temperature)
const fruits_casted3 = String(fruits)
const heightOfMe_casted3 = String(heightOfMe)
// String 생성자 함수를 new 연산자 없이 호출하는 방법

