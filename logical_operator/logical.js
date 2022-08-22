// 논리연산자 logical operator
// && and 그리고
// || or 또는
// 단축평가 : short-circuit evaluation

const obj1 = { name: '🐶'}
const obj2 = { name: '🐯', owner: 'clair' }

if (obj1 && obj2) {
  console.log('둘 다 true!')
}

let result = obj1 && obj2;
console.log(result)

result = obj1 || obj2;
console.log(result)


// 활용 예
// && 조건이 truthy일 때, 무언가를 해야 할 경우
// || 조건이 falshy일 때, 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인 없음')
  }
  animal.owner = '바뀐주인';
}

function makeOwner(animal) {
  if (animal.owner) {
    throw new Error('주인 있음')
  }
  animal.owner = '새로운 주인'
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1)
console.log(obj2)

obj1.owner || makeOwner(obj1);
obj2.owner || makeOwner(obj2);
console.log(obj1)
console.log(obj2)


// null 또는 undefined인 경우를 확인할 때
let item;
// let item = { price: 1 };
const price = item && item.price;
console.log(price)


// 기본값을 설정
// default parameter 전달하지 않거나, undefined 설정
// || 값이 falshy한 경우 설정(할당) : 0, -0, null, undefined, ''
// function print(message = 'hi') {
//   console.log(message);
// }

// print(); // hi
// print(undefined); // hi
// print(null); // null
// print(0); // 0

function print(message) {
  const text = message || 'Hello';
  console.log(text)
}
print(); // hello
print(undefined); // hello
print(null); // hello
print(0); // hello