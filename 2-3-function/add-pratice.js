
// 문제1 문자열 반복하기
function repeatString(text, repeatCount) {
  let totalText = '';
  for (let i = 0; i < repeatCount; i++) {
    totalText += text;
  }
  return totalText;
}

// 문제2 심사위원 점수 계산기


// 문제3 맞춤 인사말 생성기
function  greet(name, sayHello = "안녕하세요") {
  let sentence = '';
  sentence = ` "${sayHello}, ${name}님!" `;
  return sentence;
}

// 문제4 섭씨를 화씨로 변환하기
function celsiusToFahrenheit(celsius) {
  let fahrenheit = 0;
  fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

// 문제5 특정 문자 개수 세기
function countChar(word, alphabet) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (alphabet === word.charAt(i)) {
      count++;
    }

  }
  return count;
}

// 함수 호출 코드
console.log(`pratice 1`);
let result1 = repeatString("안녕", 3);
console.log(`result1: ${result1}`); // 예상 결과: "안녕안녕안녕"

let result2 = repeatString("짝", 5);
console.log(`result2: ${result2}`); // 예상 결과: "짝짝짝짝짝"

console.log('===========================');

console.log(`pratice 2`);

// 함수 호출 코드
/*let result3 = calculateAverageScore(10, 0, 20, 30, 40); // 0과 40 제외, (10+20+30)/3
console.log(`result3: ${result3}`); // 예상 결과: 20

let result4 = calculateAverageScore(90, 80, 85, 95, 70, 75); // 70과 95 제외, (90+80+85+75)/4
console.log(`result4: ${result4}`); // 예상 결과: 82.5

let result5 = calculateAverageScore(100, 90); // 최고, 최저 제외하면 점수 없음
console.log(`result5: ${result5}`); // 예상 결과: 0

let result5_1 = calculateAverageScore(10, 20, 30); // 10, 30 제외하면 20 하나 남음 (유효점수 1개)
console.log(`result5_1: ${result5_1}`); // 예상 결과: 0*/

console.log('===========================');

console.log(`pratice 3`);

// 함수 호출 코드
let result6 = greet("철수");
console.log(`result6: ${result6}`); // 예상 결과: "안녕하세요, 철수님!"

let result7 = greet("영희", "반가워요");
console.log(`result7: ${result7}`); // 예상 결과: "반가워요, 영희님!"

let result8 = greet("미애", "오랜만입니다");
console.log(`result8: ${result8}`); // 예상 결과: "오랜만입니다, 미애님!"

console.log('===========================');

console.log(`pratice 4`);

// 함수 호출 코드
let result9 = celsiusToFahrenheit(0);
console.log(`result9: ${result9}°F`); // 예상 결과: 32°F

let result10 = celsiusToFahrenheit(25);
console.log(`result10: ${result10}°F`); // 예상 결과: 77°F

let result11 = celsiusToFahrenheit(-10);
console.log(`result11: ${result11}°F`); // 예상 결과: 14°F

console.log('===========================');

console.log(`pratice 5`);

// 함수 호출 코드
let result12 = countChar("banana", "a");
console.log(`result12: ${result12}`); // 예상 결과: 3

let result13 = countChar("apple", "p");
console.log(`result13: ${result13}`); // 예상 결과: 2

let result14 = countChar("javascript is fun", "s");
console.log(`result14: ${result14}`); // 예상 결과: 2

let result15 = countChar("Hello World", "o");
console.log(`result15: ${result15}`); // 예상 결과: 2



