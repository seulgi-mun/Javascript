// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다

const fruits = ['🍏', '🍊', '🍇', '🍒']
const [first, second, ...others] = fruits;
console.log(first)
console.log(second)
console.log(others)

const point = [1, 2]
const [x, y, z=0] = point;
console.log(x)
console.log(y)
console.log(z)

function createEmoji() {
  return ['apple', '🍎']
}

const [title, emoji] = createEmoji();
console.log(title)
console.log(emoji)

const clair = {name: 'clare', age:'18', job: 'actor'}
function display({name, age, job}) {
  console.log('이름 :', name)
  console.log('나이 :', age)
  console.log('직업 :', job)
}

display(clair)

const {name, age, job: occupation, pet = 'dog'} = clair
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);