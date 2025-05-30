// 약수구하기 -? 5월 29일 기준 내일 해설 예정
// alert은 마지막에 한번만 쓰기

let number = +prompt('양의 정수를 입력하세요.');

if (isNaN(number)) {
  alert('숫자만 입력하세요!');
}

else if (number <= 0) {
  alert('1 이상의 양수만 입력하세요!');
}

let resultText = '';
for (let i = 1; i < number; i *= 2) {
  resultText += `${i} `;
}

alert(resultText);


