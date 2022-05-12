// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]




function change(arr, from, to) {
  // 고차함수
  // return arr.map((item) => item === from ? to : item)
  const newArr = Array.from(arr)
  for (i = 0; i < arr.length; i++) {
    if (newArr[i] === from) {
      newArr[i] = to
    }
  }
  return newArr
}

const arr = ['🍌', '🍓', '🍇', '🍓']
const result = change(arr, '🍓', '🥝')
console.log(result)



// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

const arr2 = [ '🍌', '🥝', '🍇', '🥝' ]

function counter(arr, target) {
  // 고차함수
  // return arr.filter(val => val === target).length

  // return arr.reduce((count, val) => {
  //   if (val === target) {
  //     count ++;
  //   }
  //   return count
  // }, 0)

  let cnt = 0
  for (let i = 0; i < arr2.length; i ++) {
    if (arr2[i] === '🥝' ) {
      cnt += 1
    }
  }
  return cnt
}
console.log(counter(arr2, '🥝'))

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

const arr3 = ['🍌', '🥝', '🍇']
const arr4 = ['🍌', '🍓', '🍇', '🍓']

function duplicate(ls, ls2) {
  // 고차함수
  // return ls.filter((item) => ls2.includes(item))

  const match = []
  for (let k = 0; k < ls.length; k++) {
    if (ls2.includes(ls[k])) {
      match.push(ls[k])
    }
  }
  return match
}

console.log(duplicate(arr3, arr4))


// 퀴즈 4

// 5이상(보다 큰)의 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];

let tmp = 0

// 함수로
function maxx(arr) {
  let ans = 0
  arr.forEach((num) => {
    let morethanfive = []
    if (num >= 5) {
      morethanfive.push(num)
      tmp += 1
      // console.log(tmp, morethanfive)
    }
    
    morethanfive.map((val) => {
      ans += val
      // console.log(ans)
    })
  })
  return ans / tmp
}

console.log(maxx(nums))

// 고차함수로
const result2 = nums
  .filter((num) => num >= 5)
  .reduce((avg, num, _, arrr) => avg + num / arrr.length, 0)

console.log(result2)