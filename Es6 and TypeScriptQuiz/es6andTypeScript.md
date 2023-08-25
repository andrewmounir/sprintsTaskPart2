#ES6 and TypeScriptQuiz

##Questions and Answers

> console.log("age", age);
> age = 20;

- ReferenceError: age is not defined

> what is the expected output of the following:

function user(): void {
let name: string;
if (true) {
let email: string;
console.log('name inside if:', name );
console.log( 'email inside if:' email); }
console.log( 'name outside if:' ,name);
console.log( 'email outside if:' ,email); }

# name inside if is: undefined, email inside if: undefined, name outside if: undefined, email outside if: compiler error Cannot find name 'email'

> why the following code should throw an error?

> const name: string;

## Compiler Error: const declaration must be initialized

> what is the expected output of the following?

function add(a, b = 3) {
return a + b
}
console.log(add(5))

# 8

> what is the expected output of the following?

const [firstName = "Mona", website] = ["Ali"];

console.log(firstName);
console.log(website);

## Mona undefined

> what is the expected output of the following?

const [firstName, ...otherInfo] = ["Hazem", "Ahmed", "codesweetly.com"];

console.log(firstName);
console.log(otherInfo);

# Hazem [ "Ahmed", "codesweetly.com" ]

> what is the expected output of the following?

const profile = ["codesweetly.com", "Femal", ["Noha", "Khaled"]];
function getUserBio([website, , [userName]]) {
return `${userName}  runs ${website}`;
}

getUserBio(profile);

# Noha runs codesweetly.com

> what is the expected output of the following?

const profile = {
website: "codesweetly.com",
gender: "Male",
fullName: {
firstName: "Badr",
lastName: "Saad"
}
};

function getUserBio({ website, fullName: { firstName: userName } }) {
return `${userName} runs ${website}`;
}

getUserBio(profile);

# Badr runs codesweetly.com

> what is the expected output of the following?

const name = "Sponge Bob";
const age = 7;
const userBio = 'Name:' + name + ', Age:' + age;
console.log(userBio)

# Name: Sponge Bob, Age: 7

> what is the expected output of the following?

const name = "Sponge Bob";
const age = 7;
const userBio = 'Name:' + name + ', Age:' + age;
console.log(userBio)

# Name: Sponge Bob, Age: 7

> what is the expected output of the following?

function Car() {
this.speed = 0;
this.speedUp = function (speed) {
this.speed = speed;
setTimeout(function () {
console.log(this.speed);
}, 1000);

};

}

let car = new Car();
car.speedUp(50);

# undefined

Object.is() behaves like === operator with two differences:

- Object.is(+0,-0) is false but +0===-0 is true AND NaN===NaN is false but Object.is(Nan,Nan) is true

> What is the expected output of the following:

enum Gender {
Male,
Female
Other
}
console.log(Gender.Male);

console.log(Gender[1]);

# 0, Female

> What is the expected output of the following:

var employee = {
firstName: 'John',
lastName: 'Doe',
age: 25,
jobTitle: 'Web Developer'
};

console.log(employee.hireDate);
employee = "Jane";
console.log(employee.hireDate);

# undefined undefined

> What is the expected output of the following:

let skills: string[];
skills = ['Problem Sovling','Software Design','Programming'];
skills.push(100)

# Type 'number' is not assignable to type 'string

> What is the expected output of the following:

const arr1=[1,2,3]
const arr2=[4,5,6]
arr1=[...arr1,...arr2]
console.log(arr1)

# TypeError: Assignment to constant variable
