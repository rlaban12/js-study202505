
function min2(firstNumber, secondNumber) {
  if (firstNumber < secondNumber) {
    return firstNumber;
  } else {
    return secondNumber;
  }

}

function min3(firstNumber, secondNumber, ThirdNumber) {
  let min = 0;
  if (firstNumber < secondNumber) {
    min = firstNumber;
  } else {
    min = secondNumber;
  }

  if (ThirdNumber < min) {
    min = ThirdNumber;
    return min;
  } else {
    return min;
  }

}

function isEven(number) {
  return number % 2 === 0;
}

function min(...inputNumbers) {
  let minNumber = inputNumbers[0];
  for (let i = 0; i < inputNumbers.length; i++) {
    if (minNumber > inputNumbers[i]) {
      minNumber = inputNumbers[i];
    }
  }

  return minNumber;
}

//result에는 56이 리턴되어야 함.
let result1 = min2(134, 56);
console.log(`result1: ${result1}`);

// 셋중에 가장 작은 수 50이 result에 저장되어야 함.
let result2 = min3(120, 50, 99);
console.log(`result2: ${result2}`);

// 숫자 1개를 전달하면 해당 숫자가 짝수인지 판별하는 함수
// 24를 전달하면 true리턴, 홀수를 전달하면 false리턴,
// 단, 0은 짝수취급
let result3 = isEven(3);
console.log(`result3: ${result3}`);

// result4에는 -1000이 저장되어야 함.
let result4 = min(9, 76, -90, -1000, 555, 780);
console.log(`result4: ${result4}`);


