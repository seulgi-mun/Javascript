// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
// 결과 > ['🍌', '🍎', '🍇', '🍑']

const new_fruits = new Set(fruits)
console.log(new_fruits)


// 답
console.log([...new Set(fruits)])
console.log(fruits)

function removeDuplication(arr) {
  return [...new Set(arr)]
}
console.log(fruits)


// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findIntersection(set1, set2) {
  const arr = [...set1].filter((item) => set2.has(item))
  return new Set(arr)

  // return new Set([...set1].filter((item) => set2.has(item)))
}
console.log(findIntersection(set1, set2))