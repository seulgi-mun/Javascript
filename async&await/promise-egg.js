// promise 함수들

function fetchEgg(chiken) {
  return Promise.resolve(`${chiken} => 🥚`)
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`)
}

function getChiken() {
  return Promise.reject(new Error('치킨 없음'))
  // return Promise.resolve(`🥦 => 🐔`)
}


getChiken()
  // catch의 순서를 바꾸고 return 값을 지정해주면 실행 됨
  .catch((err) => {
    console.log(err.name);
    return '🐔'
  })
  .then((chiken) => fetchEgg(chiken))
  .then((egg) => fryEgg(egg))
  .then((friedEgg) => console.log(friedEgg))
  // .catch((err) => console.log(err.name))


// 가급적 간결하게 만드는 게 좋음
// 전달한 인자와 참조값이 똑같으니까 생략 가능함
getChiken()
  .catch(() => '🐔')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log)