// 고차 함수

const fruits = ['🍌', '🍓', '🍇', '🍒']
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}


// 배열을 빙글빙글 돌면서 원하는 것을 할 때
fruits.forEach(function(value, index, arr) {
  console.log(value, 'value')
  console.log(index, 'index')
  console.log(arr, 'arr')
})

fruits.forEach((item) => console.log(item,'똑같'))


// 조건에 맞는(콜백함수) 아이템 찾을 때
const item1 = { name: 'apple', price: 5 }
const item2 = { name: 'banana', price: 1 }
const item3 = { name: 'orange', price: 3 }
const products = [item1, item2, item3, item2]

// find - 제일 먼저 조건에 맞는 아이템을 반환
let found = products.find((value) => {
  return value.name === 'banana'
})

// const found = products.find((value) => value.name === 'banana')
console.log(found)

// findIndex - 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => value.name === 'banana')
console.log(result)

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === 'banana')
console.log(result)

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === 'banana')
console.log(result)


// 조건에 맞는 모든 아이템들을 새로운 배열로
result = products.filter((item) => item.name === 'banana')
console.log(result)


console.clear()

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성
const nums = [1, 2, 3, 4, 5]
result = nums.map((item) => item * 2)
console.log(result)

result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2
  } else {
    return item
  }
})
console.log(result)


// flatMap - 중첩된 배열 쫙 펴줌
result = nums.map((item) => [1, 2])
console.log(result)

result = nums.flatMap((item) => [2, 3])
console.log(result)

result = ['hello', 'world'].flatMap((text) => text.split(''))
console.log(result)


// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경

const texts = ['hi', 'abc']
texts.sort()
console.log(texts)

const numbers = [0, 5, 4, 2, 1, 10]
numbers.sort()
console.log(numbers)  // 결과 > [ 0, 1, 10, 2, 4, 5 ] 문자열로 변환 되서 그럼

// < 0 a가 앞으로 정렬, 오름차순
// > 0 b가 앞으로 정렬, 내림차순 
numbers.sort((a, b) => a - b)
console.log(numbers)  // 결과 > [ 0, 1, 2, 4, 5, 10 ]


// reduce 배열의 요소들을 접어서 접어서 값을 하나로 (보태보태?)
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value
  return sum
}, 0)   // 0은 sum의 초기값(시작할 값)
console.log(result)

// 간단하게
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0)
console.log(result)
