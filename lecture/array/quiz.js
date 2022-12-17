// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]


const arr = ['🍌', '🍓', '🍇', '🍓']
function change(ls) {
  for (let i = 0; i < ls.length; i++) {
    if (ls[i] === '🍓') {
        ls[i] = '🥝'
      }
    }
  return ls
}

const result = change(arr)
console.log(result)


// 답
function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
        replaced[i] = to;
      }
    }
  return replaced
}

const result1 = replace(arr, '🍓', '🥝');
console.log(result1);



// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

const arr2 = [ '🍌', '🥝', '🍇', '🥝' ]


function counter(ls) {
  let count = 0
  for (let i = 0; i < ls.length; i++) {
    if (ls[i] === '🥝') {
      count += 1
    }
  }
  return count
}

const answer = counter(arr2)
console.log(answer)


// 답
function count(arr, item) {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '🥝') {
      cnt += 1
    }
  }
  return cnt
}

console.log(count([ '🍌', '🥝', '🍇', '🥝' ], '🥝'))



// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

const arr3 = ['🍌', '🥝', '🍇']
const arr4 = ['🍌', '🍓', '🍇', '🍓']

function same(ls1, ls2) {
  const answer = [];
  for (let i = 0; i < ls1.length; i++) {
    if (ls2.includes(ls1[i])) {
      answer.push(ls1[i])
    }
  }
  return answer
}

console.log(same(arr3, arr4));



// 답
function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i])
    }
  }
  return result
}

console.log(match(['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']));



// 퀴즈 4

// 5보다 큰 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];

let tmp = 0
let cnt = 0

// 함수로

const ans = nums
  .filter((num) => num > 5)   // [16, 25, 34, 21] => arr
  .reduce((avg, num, _, arr) => avg + num / arr.length, 0)

console.log(ans)


// 고차함수로
