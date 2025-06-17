
// 전역 변수 ======================================================================================================
const $guessInput = document.getElementById('guess-input');
const $guessBtn = document.querySelector('.guess-button');
const $historyList = document.getElementById('history-list');

const correctNumber = Math.floor(Math.random() * 100) + 1;


// 함수 선언 ======================================================================================================



// 코드 실행 ======================================================================================================



// 이벤트 바인딩 ======================================================================================================
$guessBtn.addEventListener('click', e => {

  // 정답 숫자 생성


  // 사용자가 입력한 값 가져오기
  const inputNumber = $guessInput.value;

  // 입력한 값이 정답보다 작으면 -> "업! 더 큰 수"
  // 입력한 값이 정답보다 크면 -> "다운! 더 작은 수"
  // 입력한 값이 정답 -> "정답"

  if (inputNumber < correctNumber) {
    // alert(`입력한 수는 ${inputNumber}, 업! 더 큰 수, 정답: ${correctNumber}`);
    const upHistory = document.createElement('li');
    upHistory.classList.add('up');
    $historyList.append(upHistory);

  } else if (inputNumber > correctNumber) {
    // alert(`입력한 수는 ${inputNumber}, 다운! 더 작은 수, 정답: ${correctNumber}`);

  } else {
    // alert(`입력한 수는 ${inputNumber}, 정답입니다!, 정답: ${correctNumber}`);

  }


});

