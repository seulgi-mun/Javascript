// 옵서녈 체이닝 연산자 Optional Chaining Operatior
// ES11 (ECMAScript 2020)
// ?.
// null 또는 undefined를 확인할 때


// let item;
let item = { price: 1 };
const price = item?.price;
console.log(price)


let obj = { name: '🐶', owner : { name : 'clair' } }

function printName(obj) {
  const ownerName = obj?.owner?.name;
  console.log(ownerName)
}
printName(obj)