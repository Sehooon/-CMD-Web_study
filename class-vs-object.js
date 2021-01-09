'use strict';
// object-oriented programming
// class: template
// object: instance of a class
// Javascript classes
// -introduced in ES6
// -syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person{
    //constructor
    constructor(name,age){
    //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak(){ console.log(`${this.name}:hello!`); }
} 


const ellie = new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and Setters
class user{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age=age;
    }
    get age(){ return this._age; }
    set age(value){ this._age=value < 0 ? 0 : value; } 
}
const user1 =new user('Steve', 'Job', -1);
console.log(user1.age);


//3. Fields (public, private)
//Too soon!
class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


//4. Static properties and methods
//Too soon!
class  Article{
    static publisher=' Dream Coding';
    constructor(articleNumber){
        this.articleNumber=articleNumber;
    }
    
    static printPublisher(){
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();   

//5. Inheritance
//a way for one class to extend another class.
class shpae{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() { console.log(`drawing ${this.color} color`); }
    getArea(){ return width * this.height; }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw(){ super.draw(); console.log("tri"); }
    getArea() {

        return (this.width * this.height) /2;
    }
    toString(){
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20,20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());    

//6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);  //True
console.log(triangle instanceof Rectangle);   //False
console.log(triangle instanceof Triangle);    //True
console.log(triangle instanceof Shape);       //True 상속했으므로 맞음
console.log(triangle instanceof Object);      //True 자바스크립트의 모든 오브젝트는 자바스크립트 오브젝트를 상속
console.log(triangle.toString());
//javascripmdn
