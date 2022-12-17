// Set
// 순서가 없음, 중복 안됨
// 순회 가능
const set = new Set([1, 2, 3])

// 사이즈 확인
console.log(set.size)

// 존재 확인
console.log(set.has(2))   // true
console.log(set.has(6))   // false

// 순회
set.forEach((item) => console.log(item))
for (const value of set.values()) {
  console.log(value)
}

// 추가
set.add(6)
console.log(set)

// 삭제 
set.delete(6)
console.log(set)

// 전부 삭제
set.clear()
console.log(set)


// 오브젝트 세트
const obj1 = { name: 'apple', price: 8}
const obj2 = { name: 'tomato', price: 5}
const objs = new Set([obj1, obj2])


// 중복 안 됨
obj1.price = 10
objs.add(obj1)
console.log(objs)


// 객체 추가 중복인지?
const obj3 = { name: 'tomato', price: 5}
objs.add(obj3)
console.log(objs)

// 수정
obj3.price = 8
console.log(objs)