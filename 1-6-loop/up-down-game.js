//========== v1.0 시나리오 =================
// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

let correctScore = Math.floor(Math.random() * 100) + 1;
let userInputNumber = prompt(`숫자를 입력하세요! [1 ~ 100]`);
let hintMinNumber = 1;
let hintMaxNumber = 100;

//up인지 down 인지 알려주기, 못 맞추면 힌트주기
while (true) {
  if (userInputNumber < correctScore) {
    // alert(`UP!! correctScore: ${correctScore}`);
    alert(`UP!!`);
    hintMinNumber = userInputNumber;
    userInputNumber = prompt(`숫자를 입력하세요! 힌트: [ ${hintMinNumber}, ${hintMaxNumber} ]`);
  }
  else if (userInputNumber > correctScore) {
    alert(`DOWN!!`);
    hintMaxNumber = userInputNumber;
    userInputNumber = prompt(`숫자를 입력하세요! 힌트: [ ${hintMinNumber}, ${hintMaxNumber} ]`);
  }
  else {
    alert(`정답!`);
    break;
  }

}

//========== v1.1 시나리오 =================
// 사용자들은 입력 기회가 5번으로 제한된다.
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.


//========== v1.2 시나리오 =================
// 사용자는 게임 시작전에 난이도를 설정할 수 있다.
// 난이도는 상, 중, 하 난이도가 존재하며 난이도별 입력 횟수제한이 다르다.

