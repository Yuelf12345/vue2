// 原型和原型链 

// 原型 protoType __proto__

function Person(name) {
    this.name = name;
}

const p1 = new Person('张三');

console.log('protoType', p1.__proto__ === Person.prototype);
console.log('constructor', Person.prototype.constructor === Person);

// 原型链
function Student(name) {
    Person.call(this, name)
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayAge = function () {
    console.log('年龄', this.age);
};

const s1 = new Student('李四');
s1.sayAge()


// new
function User(name){
    this.name = name;
    return {
        name: '李四',
        age: 20
    }
}

const u1 = new User('张三');

console.log('u1', u1);

// myNew
function myNew(Constructor, ...args) {
    const obj = {}
    obj.__proto__ = Constructor.prototype;
    let res =  Constructor.call(obj, ...args)
    return typeof res === 'object' ? res : obj;
}

const u2 = myNew(User, '李四');

// call apply bind

const obj = {
    name: '张三',
    sayName(age,gender) {
        console.log('name', this.name,age,gender);
    }
}

const obj2 = {
    name: '李四'
}
obj.sayName.call(obj2,18,'男')


// 事件循环
queueMicrotask(()=>{
    console.log('queueMicrotask');
})
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    //async2做出如下更改：
    new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
    });
}
console.log('script start');
 
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();

new Promise(function(resolve) {
    console.log('promise3');
    resolve();
}).then(function() {
    console.log('promise4');
});
 
console.log('script end');

/**
 * script start
 * async1 start
 * promise1
 * promise3
 * script end
 * promise2
 * async1 end
 * promise4
 * setTimeout
 */