let apple = 3 * 5;

console.log(apple + 3);

let myName = "파스타";

console.log(myName);

// 변수의 값은 변경 가능함
apple = 100;

console.log(apple + 3);

console.log(apple);

apple = apple + 3;

console.log(apple);

// 변수의 이름을 지을 때 주의사항
let friendName; // 관례: camel case

// 이름이 숫자로 시작하면 안된다.
// 특수문자 사용불가: _, $ 는 예외적으로 가능
// 예약어(키워드)는 변수이름 사용 불가 ex) let, for

// 대소문자 구분함
// 변수의 선언
let banana;
let Banana; // 대소문자를 다르게 하면 다른 변수다

// 변수의 초기화 (initialize)
banana = "맛도리 뻐네너";

// 만약 변수를 초기화 하지 않으면 undefined가 저장됨.
console.log(Banana);


