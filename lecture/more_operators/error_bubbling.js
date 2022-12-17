// Bubbling up, Propagationg
// 에러의 전파

function a() {
  throw new Error('error')
}

// a 에러가 b로 전달
function b() {
  try {
    a();
  } catch (err) {
    console.log('생각해보니 이 에러는 내가 핸들링 할 수 없을 것 같다');
    throw err;
  }
}

// b 에러가 c 로 전달
function c() {
  b();
}

try {
  c();
} catch (err) {
  console.log('catched');
}
console.log('done')