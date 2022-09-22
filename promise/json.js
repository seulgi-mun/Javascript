// JSON (JavaScript Object Notation)
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringify(object): JSON
// parse(JSON): object

const claire = {
  name : 'claire',
  age : 20,
  eat: () => {
    console.log('eat');
  }
}



// 직렬화 Serializing : 객체를 문자열로 변환
// stringify를 써서 json으로 서버에 보내면 함수는 읽어들이지 않음(데이터 상태만 변환해줌)
// 객체의 상태들을 문자열로 반환해 줌
const json = JSON.stringify(claire)
console.log(json);
console.log(claire);


// 역직렬화 Deserializing : 문자열 데이터를 자바스크립트 객체로 변환
// json으로 변환한 걸 다시 객체로 반환해 줌
const obj = JSON.parse(json)
console.log(obj);