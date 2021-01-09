//object.js
// ✔ object = {key : value };

// 1. Literals and properties
const obj1 ={}; //'object literal' syntax
const obj2 =new Object(); //'object constructor' syntax

const name ='ellie';
const age = 4;
function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie={ name:'ellie', age:4 };  // key : value의 집합체 

print(ellie);

ellie.hasJob = ture;        //유지 보수의 어려움.
console.log(ellie.hasJob)  

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);    //key에 해당하는 값 받아오기
console.log(ellie['name']); //배열형식으로 접근가능, 정확하게 어떤 키가 필요한지 모를 때,
console.log(ellie.hasJob);
ellie['hasJob']=true;

function printValue(obj,key){ console.log(obj[key]); } //동적으로 key를 받아올 때, 유용하게 사용
printValue(ellie, 'name'); 

//3. Property value shorthand
const person1 = { name : 'bob', age : 2};
const person2 = { name : 'bob', age : 2};
const person3 = { name : 'bob', age : 2};
const person4 = Person('ellie',30); 
console.log(person4);

//4. Constructor Function
function Person(name, age){   
        //this ={}    
    this.name=name;
        this.age=age;
    //return this;
}

//5. in operator: property exsitence check (key in obj) 해당 오브젝트에 키가 있는지 확인
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random); //-> undefined;

//6. for..in vs for..of
// for ( key in obj)
for (key in ellie){ console.log(key); }

// for (value of iterable)
const array =[1,2,4,5];
for(let i =0; i < array.length ; i++){ console.log(array[i]); }
for(value of array){ console.log(value) }

// 7. Fun cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'}; //오브젝트 생성
const user2 = user;             
user2.name='coder'; 
console.log(user); 

//old way
const user3={};
for ( key in user){ user3[key] = user[key]; } //복사하는 방법

//
const user4= Object.assign({}, user);
/*
const user4 = {};
Object.assign(user4, user);
console.log(user4);
*/

//another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size:'big'};
const mixed = Object.assign({},fruit1,fruit2); // {} <- fruit1 <- fruit2
console.log(mixed.color); //-> blue
console.log(mixed.size);  //-> big


