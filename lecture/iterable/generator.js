function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i)
      yield i ** 2
    }
  } catch (err) {
    console.log(err)
  }
}

const multiple = multipleGenerator()
let next = multiple.next();
console.log(next.value, next.done)

// multiple.return();
multiple.throw('error!')

next = multiple.next();
console.log(next.value, next.done)