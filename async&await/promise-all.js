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

// 총 4초 걸린 1초 + 3초
getBanana()
  .then((banana) => 
    getApple()
      .then(apple => {
        return [banana, apple]
    })
  )
  .then(result => console.log(result))

  
getBanana()
.then((banana) => 
  getApple()
    .then(apple => [banana, apple]
  )
)
.then(result => console.log(result))


// 총 3초가 걸리게 병렬적으로 가져오기
Promise.all([getBanana(), getApple()])
  .then(fruits => console.log(fruits, 'all'))

// 가장 빠른 초의 함수 값만 출력
Promise.race([getBanana(), getApple()])
  .then(fruit => console.log(fruit, 'race'))


// error 가 있는 값이 있다면 catch 처리
Promise.all([getBanana(), getApple(), getOrange()])
  .then(fruits => console.log(fruits, 'all-error'))
  .catch(console.log)


// finally 같이 모든 결과 값 보여 줌
Promise.allSettled([getBanana(), getApple(), getOrange()])
  .then(fruits => console.log(fruits, 'all-settled'))
  .catch(console.log)