
// 우리 집 강아지 2마리 - 초코, 해피
let dogName1 = '초코';
let dogName2 = '해피';
let dogAge1 = 3;
let puppyAge2 = 5;
let tall1 = 30;
let height2 = 45;
let inject = false;
let inject2 = true;

// 객체
let myDog1 = {
  name: '초코',
  age: 3,
  tall: 30,
  weight: 10,
  injection: false,
  vegetarian: true,
  favorites: ['산책', '간식']
};

let myDog2 = {
  name: '해피',
  tall: 45,
  age: 5,
  injection: true,
  weight: 10,
  vegetarian: false,
  favorites: ['꼬리흔들기', '간식']
};

// 객체 프로퍼티 참조법
console.log(myDog1.name);
console.log(myDog2.name);
console.log(myDog2.age);

console.log(typeof myDog1);
console.log(typeof myDog1.name);
console.log(typeof myDog1.injection);
console.log(typeof myDog1.favorites);
console.log(typeof myDog1.favorites[1]);

myDog2.age++;

console.log('===========================');
// 프로퍼티 참조법 2
console.log(myDog2['name']);
console.log(myDog2['age']);

let height = 'tall';
console.log(myDog1[height]);

console.log('===========================');

let key = 'name';

console.log(myDog2[key]);

let myCat = {
  name: '나비',
    age: 4,
    'my hobby': '시비걸기'

};

console.log(myCat["my hobby"]);

let divStyle = {
  color: 'red',
  background: 'orange',
  'font-size': '16px'
};

console.log(divStyle["font-size"]);

