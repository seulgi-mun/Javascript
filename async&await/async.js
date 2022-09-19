function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌')
    }, 1000)
  })
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎')
    }, 3000)
  })
}

function getOrange() {
  return Promise.reject(new Error('오렌지 없음'))
}


// 바나나와 사과 가지고 오기

async function fetchFruits() {
  const banana = await getBanana()
  const apple = await getApple()
  return [banana, apple]
}

fetchFruits()
  .then((fruits) => console.log(fruits))
