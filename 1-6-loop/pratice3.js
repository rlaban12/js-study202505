// 약수구하기 -? 5월 29일 기준 내일 해설 예정
// alert은 마지막에 한번만 쓰기
let positiveInteger = prompt("양의 정수를 입력하세요.");
let piCount = parseInt(positiveInteger);
let result = '';

for (let i = 0; i < piCount; i++) {
  if (piCount % i === 0) {
    result += i.toString()  + ' '
  }

}

alert(result);

// 약수 구하기2


