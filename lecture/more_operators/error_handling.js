// try catch finally

function readFile(path) {
  // throw new Error('파일 경로를 찾을 수 없음')
  return ' 파일 내용'
}

function processFile(path) {
  let content;
  try {
    content = readFile(path)
  } catch(error) {
    console.log(error);
    console.log(error.name);  // 에러 명
    console.log(error.message); // 에러 메시지 뭔지
    console.log(error.stack); // 어떤 경로를 통해서 여기까지 왔는지
    content = ' 에러시 기본 내용';
  } finally {
    console.log('성공하든 실패하든 무조건 나옴');
  }
  const result = 'hi' + content
  return result
}

const result = processFile('경로')
console.log(result)