
// 함수 선언문 방식
// function add(n1, n2) {
//   return n1 + n2;
// }

// 함수표현식 방식
// const add = function (n1, n2) {
//   return n1 + n2;
// };

// 화살표 함수 방식(ES6)
const add =  (n1, n2) => n1 + n2;


const r1 = add(10, 20);
console.log(`r1: ${r1}`);

const isEven =  (n) => n % 2 === 0;
console.log(isEven(25));

// () 는 파라미터가 하나일때만 생략 가능
const sayHello = nickName => console.log(`${nickName}님 안녕~~`);


sayHello('크룽이');

// 화살표 함수 만드는 단축키: arf
// 화살표 함수는 호이스팅 안됨 -> 함수 선언을 앞에 해줘야 한다.
const pow = n => n ** 2;

const r3 = pow(3);
console.log(`r2: ${r2}`);


