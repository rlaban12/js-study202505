

const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스'],
    salary: 5400000,
    age: 35,
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스'],
    salary: 9700000,
    age: 18,
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상'],
    salary: 3900000,
    age: 56,
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스'],
    salary: 1900000,
    age: 42,
  },
];

//  1. every() 직접 구현하기
function every(callback) {
  // 여기에 작성

  for (const item of userList) {
    if(callback(item)) {
     return true;
    } else {
      return false;
    }
  }

}

// 사용 예시
// 모든 사용자가 서울에 사는가?
const result1 = every(user => user.address === '서울');
console.log(result1);

// 모든 사용자의 취미가 1개 이상인가?
const result2 = every(user => user.hobbies.length > 0);