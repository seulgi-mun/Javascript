console.log(globalThis)
console.log(this)
console.log(Infinity)
console.log(NaN)
console.log(undefined)

eval('const num = 2; console.log(num)')
console.log(isFinite(1))
console.log(isFinite(Infinity))
console.log(parseFloat('12.43'))
console.log(parseInt('12.43'))
console.log(parseInt('11'))


// URL (URI의 하위 개념 > uniform resource identifier 어떤 리소스를 나타내는 단 하나의 고유한 주소를 말함)
// 아스키 문자로만 구성되어야 함

const URL = 'https://테스트.com'
const encoded = encodeURI(URL)
console.log(encoded)

const decoded = decodeURI(encoded)
console.log(decoded)

// 전체 url이 아니라 부분적인 것은 component 이용
const part = '테스트.com'
console.log(encodeURIComponent(part))