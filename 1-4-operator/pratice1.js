
let name = prompt(`당신의 이름은?`);
let age = prompt(`당신의 나이는?`);

// 출생년도 구하기
let currentYear = new Date().getFullYear();
let koreanAgeMarker = 1;
let birthYear = currentYear - +age + koreanAgeMarker;

alert(`${name}은 ${birthYear}년생이시군요? `);
// alert(`${birthYear}은 xxx 띠네요. `);


