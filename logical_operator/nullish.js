// Nullish Coalescing Operator
// ?? null, undefined
// || falshy한 경우 설정(할당)


let num = 0; 
console.log(num || '-1'); // num = 0 이라서 false로 인식 됨
console.log(num ?? '-1'); // num 값이 있어서 0 출력 됨, 값 없으면 -1 출력 됨