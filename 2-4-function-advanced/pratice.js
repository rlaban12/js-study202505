

const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbies: ['수영', '축구', '테니스'],
    salary: 5400000,
    age: 35,
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbies: ['푸드파이팅', '테니스'],
    salary: 9700000,
    age: 18,
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbies: ['족구', '축구', '테니스', '영화감상'],
    salary: 3900000,
    age: 56,
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbies: ['독서', '테니스'],
    salary: 1900000,
    age: 42,
  },
];

//  문제 1. every() 직접 구현하기
function every(callback) {
  // 여기에 작성
  let count = 0;
  for (const user of userList) {
    if(callback(user)) {
      count++;
    }

  }
  if (count === userList.length) {
    return true;
  } else {
    return false;
  }

}

// 사용 예시
// 모든 사용자가 서울에 사는가?
const result1 = every(user => user.address === '서울'); // false
console.log(result1);

// 모든 사용자의 취미가 1개 이상인가?
const result2 = every(user => user.hobbies.length > 0); // true
console.log(result2);

// 문제 2 some() 직접 구현하기
function some(callback) {
  // 여기에 작성


}

// 이름에 '왕'이 포함된 사람이 있는가?
const result3 = some(user => user.userName.includes('왕')); // true
console.log(result3);

// 부산에 사는 사용자가 있는가?
const result4 = some(user => user.address === '부산'); // false
console.log(result4);

