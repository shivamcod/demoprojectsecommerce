// ADVANCE JS 

// TEMPLATE STRINGS OR TEMPLATE LITERALS //

// var fname = "shivam";
// var lname = "kumar";
// console.log(`The full name of a person is ${fname} ${lname}`);

// var fname = "shivam";
// var lname = "kumar";
// function fullname (fname,lname) {
//     return `The full name of a person is ${fname} ${lname}`;
// }
// var x = fullname(fname,lname)
// console.log(x);

// ARROW FUNCTION 

// let hello = () => {
//     console.log("hello shivam kumar");
// }
// hello();

// let hello = () => console.log("hello shivam kumar");        WITH ONE STATEMENT
// hello();

// let hello = (val) => console.log("hello " + val);            WITH PARENTHESIS.
// console.log(hello("universe"));

// let text = (name) => `The name of person is ${name}`
// console.log(text("shivam kumar"));

// let text = name => `The name of person is ${name}`       WITHOUT THE PARENTHESIS IF HAS A ONE STATEMENT
// console.log(text("shivam kumar"));

// let text = () => "this is shivam kumar"
// let x = text();
// console.log(x);

// REST OPERATORS 

// function sum (name, course, ...args) {
//     console.log(arguments);
//     console.log(`The name of person is ${name} and the course is ${course} : `);
//     let sum = 0;
//     for (let i in args) {
//         sum += args[i];
//     }
//     console.log(sum + "<br>");
// }
// sum("shivam kumar", "B.Tech", 10,20,50,820);

// function sum (name, ...args) {
//     let sum = 0;
//     for (let i in args) {
//         sum += args[i];
//     }
//     console.log(sum);
//     console.log(name);
// }
// sum("shivam kumar", 1000,100);

// SPREAD OPERATOR 

// function sum (name, ...args) {
//     console.log(`The name of a person is ${name} and the total marks is `)
//     let sum = 0;
//     for (let i in args) {
//         sum += args[i];
//     }
//     console.log(sum + "<br>");
// }
// let arr = [10,20,60,10];
// sum("shivam kumar", ...arr);

// FOR CONCATENATION 

// var arr1 = [10,20,30];
// var arr2 = [40,50];
// var arr3 = [...arr1,...arr2];
// console.log(arr3);

// FOR ADDING A VALUE

// var arr1 = [10,20,30];
// var arr2 = [40,50];
// var arr3 = [10,...arr1,...arr2,100];
// console.log(arr3);

// FOR MERGE A OBJECT 

// var obj1 = {
//     name : "shivam kumar"
// }
// var obj2 = {
//     age : 30
// }
// var obj3 = {...obj1,...obj2};
// console.log(obj3);

// DESTRUCTURING THE ARRAY IN JAVA SCRIPT -- THIS METHOD INTRODUCE BY ES 2015. 

// let user = ["shivam kumar", 25, "muzaffarnagar", "male"];
// let[name,age,city,gender] = user;
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(gender);


// let user = ["shivam kumar", , "muzaffarnagar", "male"];          USED BY DEFAULT VALUE
// let[name,age = 20,city,gender] = user;                
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(gender);

// let user = ["shivam kumar", 25, "muzaffarnagar", "male", [25000, "www.shivam.com"]];      USED IN NESTED ARRAY
// let[name,age,city,gender,[salary,websitename]] = user;
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(gender);
// console.log(salary);
// console.log(websitename);


// let user = ["shivam kumar", 22, "muzaffarnagar", "male"];    USED IN REST OPERATOR    
// let[name,...args] = user;                
// console.log(name);
// console.log(args);

// function user([name, age, city]) {          USED IN FUNCTION 
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }
// user(["shivam kumar", 25, "Noida"])

// function user() {
//     return["shivam kumar", 25, "delhi"];
// }
// let[name,age,city] = user();

// OBJECT DESTRUCTURING 

// let user = {
//     name : "shivam kumar",
//     age : 25,
//     gender : "male"
// }
// let{name,age,gender} = user;
// console.log(name);
// console.log(age);
// console.log(gender);

// let user = {
//     name : "shivam kumar",
//     age : 25,
//     gender : "male"
// }
// let{name : n,age : a,gender : g} = user;      USED IN ALIASES
// console.log(n);
// console.log(a);
// console.log(g);

