// [Symbol.iterator](): iterator{ next(): {value, done}};
// 0부터 10 이까 숫자의 2배를 순회하는 이터레이터(반복자) 만들기
// 0, 1, 2, 3 ~~~ 9
// 0, 2, 4, 6 ~~~ 18

const nums = []

for (let i = 0; i < 10; i++) {
  nums.push(i)
}
console.log(nums, 'arr')

for (const num of nums) {
  console.log(num * 2, 'iter?')
}


const multiple = {
  [Symbol.iterator]() {
    const max = 10
    let num = 0
    return {
      next() {
        return { value: num++ * 2, done: num > max }
      }
    }
  }
}

for (const num of multiple) {
  console.log(num)
}


// 함수로
function makeIterable(init, max_value, callback) {
  return {
    [Symbol.iterator]() {
      let num = init
      return {
        next() {
          return { value: callback(num++), done: num > max_value }
        }
      }
    }
  }
}

const make_multiple = makeIterable(0, 10, (num) => num * 2)
for (const num of make_multiple) {
  console.log(num)
}

const single = makeIterable(0, 10, (n) => n)
for (const num of single) {
  console.log(num)
}