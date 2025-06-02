/*
Q. 회원의 아이디정보와 비밀번호 정보가 들어있는 객체 user가 있습니다.
   아래 요구사항에 맞는 프로그램을 작성하고 브라우저에서 테스트하세요.

- 요구사항
1. 사용자에게 아이디를 입력받으세요.
2. 입력된 아이디가 객체에 존재하는 account값 중에 하나가 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 아이디가 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "로그인 성공"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.

- 객체의 프로퍼티가 있는지 여부 확인하는 문법은 검색해보세요.

*/

let userInfo = {
  userList: [
    {
      account: 'kim1234',
      password: 'kkk1234',
      username: '김두한',
    },
    {
      account: 'park9876',
      password: 'ppp9999',
      username: '박찬호',
    },
    {
      account: 'hong7766',
      password: 'hhh1234',
      username: '홍길동',
    },

  ],
};

// userInfo의 객체 값을 배열에 저장
let account = [];
account.splice(0, 0, userInfo.userList[0].account, userInfo.userList[1].account, userInfo.userList[2].account);

let password = [];
password.splice(0, 0, userInfo.userList[0].password, userInfo.userList[1].password, userInfo.userList[2].password)

let userName = [];
userName.splice(0, 0, userInfo.userList[0].username, userInfo.userList[1].username, userInfo.userList[2].username);

while (true) {
  let inputId = prompt(`계정을 입력하세요!`);
  if (inputId === account[0]) {
    let inputPw = prompt(`비밀번호를 입력하세요!`);
    if (inputPw === password[0]) {
      alert(`${userName[0]}님 로그인 성공!`);
    } else if (inputPw === password[1]) {
      let inputPw = prompt(`비밀번호를 입력하세요!`);
      if (inputPw === password[1]) {
        alert(`${userName[1]}님 로그인 성공!`);
      }
    } else if (inputPw === password[2]) {

    } else {
      alert(`비밀번호가 틀렸습니다!`);
    }

  } else if (id === account[1]) {

  } else if (id === account[2]) {

  } else {
    alert(`회원가입부터 하세요!`);
  }


  if (true) {
    break;
  }

}

// Userinfo에서 id 조회 -> for문 쓰니 계속 반복이 안되서
// for (let i = 0; i < userInfo.userList.length; i++) {
//   if(id === userInfo.userList[i].account) {
//     let password = prompt(`비밀번호를 입력하세요!`);
//     if(password === userInfo.userList[i].password) {
//       alert(`${userInfo.userList[i].username}님 로그인 성공!`);
//       break;
//     } else {
//       alert(`비밀번호가 틀렸습니다!`);
//     }
//
//   } else {
//     alert(`회원가입부터 하세요!`);
//   }
// }


// 2025-06-2 기준 수요일에 선생님 해설 예정

