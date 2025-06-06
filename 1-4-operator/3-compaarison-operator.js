let a = 5; //00000101
let b = '5' //53 -> 00110101

// js에서만 모든 동등, 비동등 비교는 ===, !==으로 해야함
console.log(a === b);
console.log(a !== b);

console.log('===========================');

// ==은 직관적으로 결과 예측이 힘듬
console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === 0);

console.log('===========================');

// 문자 비교
let password = 'abc1234';

console.log(password === 'abc1234');

//문자 대소 비교
//          97    65
console.log('a' < 'A');
console.log('B' < 'C');
//               44032 가각간같갈감갑~힣 -> 4만대 정도이구나 정도 알기
console.log('z' < '가');

//           97 99   97 100
console.log('ace' < 'ade');

