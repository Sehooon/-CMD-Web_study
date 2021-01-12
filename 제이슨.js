// HTTP  Hypertext Transfer Protocol
// Hyper link와 전반적인 리소스 문서 이미지 파일 -> Hypertext
// AJAX Asynchronous Javascript And XML (XHR)
// fetch() API (internet explorer 지원 x)
// XML -> Html과 같은 마크업 언어
// Object {key : value}; serialize deserialize

//JSON
//JavaScript Object Notation

//1. Object to JSON
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit= {
    name: 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
     // javascript에만 있는 Symbol 적용 X.
    jump: () => { console.l(`${name} can jump!`); //함수는 오브젝트에 있는 데이터가 아니므로, stringfy 적용 X.
    }
};

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key : ${key}, value: ${value}`);
    return value;
}); 
// -> 해당하는 property만 json 적용.
console.log(json);

//2. JSON to Object
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value)=>{
    console.log(`key : ${key}, value: ${value}`);
    return key ===`birthDate` ? new Date(value) : value;
});  //JSON을 Object로 변환.
console.log(obj);
rabbit.jump();
obj.jump(); // json으로 변환할 때, 함수 포함X data만 포함. jump 메소드 X.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); 






