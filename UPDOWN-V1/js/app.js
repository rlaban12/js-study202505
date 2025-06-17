
// 전역 변수 ======================================================================================================
const $guessInput = document.getElementById('guess-input');
const $guessBtn = document.querySelector('.guess-button');
const $historyList = document.getElementById('history-list');

const correctNumber = Math.floor(Math.random() * 100) + 1;


// 함수 선언 ======================================================================================================



// 코드 실행 ======================================================================================================
// 나의 도전기록 밑에 박스 나타나는지 테스트
/*const upHistory = document.createElement('li');
upHistory.textContent = "testtest";
upHistory.classList.add('history-item');
upHistory.classList.add('up');
$historyList.append(upHistory);*/


// 이벤트 바인딩 ======================================================================================================
$guessBtn.addEventListener('click', e => {

  e.preventDefault(); // 새로고침 막기
  // 정답 숫자 생성


  // 사용자가 입력한 값 가져오기
  const inputNumber = $guessInput.value;

  // 입력한 값이 정답보다 작으면 -> "업! 더 큰 수"
  // 입력한 값이 정답보다 크면 -> "다운! 더 작은 수"
  // 입력한 값이 정답 -> "정답"

  if (inputNumber < correctNumber) {
    console.log(`입력한 수는 ${inputNumber}, 업! 더 큰 수, 정답: ${correctNumber}`);
    const upHistory = document.createElement('li');
    upHistory.textContent = "up";
    upHistory.classList.add('history-item');
    upHistory.classList.add('up');
    $historyList.append(upHistory);

  } else if (inputNumber > correctNumber) {
    console.log(`입력한 수는 ${inputNumber}, 다운! 더 작은 수, 정답: ${correctNumber}`);
    const upHistory = document.createElement('li');
    upHistory.textContent = "down";
    upHistory.classList.add('history-item');
    upHistory.classList.add('down');
    $historyList.append(upHistory);

  } else {
    alert(`입력한 수는 ${inputNumber}, 정답입니다!, 정답: ${correctNumber}`);

  }


});

