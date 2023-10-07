// DOM GET METHODS //

// let element;
// element = document.getElementById("background firstsection").innerText;
// console.log(element);

// let element;
// element = document.getElementById("background firstsection").innerHTML;
// console.log(element);

// let element;
// element = document.getElementById("background firstsection").getAttribute("style");
// console.log(element);

// let element;
// element = document.getElementById("background firstsection").getAttributeNode("style");
// console.log(element);

// let element;
// element = document.getElementById("background firstsection").getAttributeNode("style").value;  only get the value
// console.log(element);

// let element;
// element = document.getElementById("background firstsection").attributes;
// console.log(element);

// let element;
// element = document.getElementById("background firstsection").attributes[2].value;
// console.log(element);

// let element;
// element = document.getElementById("background firstsection").attributes[2].name;
// console.log(element);

// SET METHODS //

// let element;
// document.getElementById("text-big").innerText = "wow this is shivam kumar";
// element = document.getElementById("text-big").innerHTML;
// console.log(element);

// let element;
// document.getElementById("text-big").setAttribute("class", "xyz");
// element = document.getElementById("text-big").getAttribute("class");
// console.log(element);

// let element;
// document.getElementById("text-big").setAttribute("style", "border: 10px dotted black");
// element = document.getElementById("text-big").getAttribute("class");
// console.log(element);

// let element;
// document.getElementById("text-big").removeAttribute("style")
// element = document.getElementById("text-big").getAttribute("class");
// console.log(element);

// NEW DOM TARGETING METHODS //

// let element;
// element = document.querySelector("#thumbnail");
// console.log(element);

// let element;
// element = document.querySelectorAll("li")[0].innerText;
// console.log(element);

// CSS STYLING METHODS //

// let element;
// element = document.querySelector("#text-big").style.border;
// console.log(element);

// document.querySelector("#text-big").style.backgroundColor = "red";   SET THE CSS PROPERTY

// let element;
// document.querySelector("#text-big").className = "abc"
// element = document.querySelector("#text-big").className;       SET THE CLASS NAME 
// console.log(element);

// let element;
// document.querySelector("#text-big").classList.add("def","ghi")      ADD THE MULTIPLE CLASS NAMES 
// element = document.querySelector("#text-big").classList;
// console.log(element);

// ADD EVENT LISTNER METHODS -- THEIR ARE TWO METHODS ///

// 1ST METHOD -- //

// document.getElementById("text-big").onclick = myfunction;
// function myfunction() {
//     document.getElementById("text-big").style.background = "red"
// }

// 2ND METHOD -- ADD EVENT LISTNER METHOD //

// document.getElementById("text-big").addEventListener("click",myfunction);
// document.getElementById("text-big").addEventListener("click",xyz);
// function myfunction() {
//     document.getElementById("text-big").style.background = "red"
// }
// function xyz() {
//     document.getElementById("text-big").style.border = "10px solid black"
// }

// document.getElementById("text-big").addEventListener("mouseleave",myfunction);
// document.getElementById("text-big").addEventListener("click",xyz);
// function myfunction() {
//     document.getElementById("text-big").style.background = "red"
// }
// function xyz() {
//     document.getElementById("text-big").removeEventListener('mouseleave',myfunction)
// }

// TRAVERSAL METHODS //

// var a = document.getElementById("text-big").parentElement;
// console.log(a);

// var a = document.head.parentNode;
// console.log(a);

// var a = document.getElementById("background firstsection").children;
// console.log(a);

// var a = document.getElementById("background firstsection").childNodes;
// console.log(a);

// var a = document.getElementById("background firstsection").firstElementChild;
// console.log(a);

// var a = document.getElementById("background firstsection").lastElementChild;
// console.log(a);

// var a = document.getElementById("background firstsection").firstChild;
// console.log(a);

// var a = document.getElementById("background firstsection").lastChild;
// console.log(a);

// var a = document.getElementById("background firstsection").previousElementSibling;
// console.log(a);

// var a = document.getElementById("background firstsection").nextElementSibling;
// console.log(a);

// var a = document.getElementById("background firstsection").previousSibling;
// console.log(a);

// var a = document.getElementById("background firstsection").nextSibling;
// console.log(a);

// DOM CREATE METHODS //

// var a = document.createElement("h2");
// console.log(a);

// var a = document.createTextNode("this is shivam kumar");
// console.log(a);

// var a = document.createComment("this is shivam kumar");
// console.log(a);

// DOM APPEND METHODS //

// var newelement = document.createElement("h2");
// var newtext = document.createTextNode("this is shivam kumar");
// newelement.appendChild(newtext)
// document.getElementById("buttons").appendChild(newelement)
// console.log(newelement);

// var newelement = document.createElement("h2");
// var newtext = document.createTextNode("this is shivam kumar");
// newelement.appendChild(newtext)
// var newinsert = document.getElementById("buttons");
// newinsert.insertBefore(newelement, newinsert.childNodes[0]);

// console.log(a);
// let a = "shivam kumar"

// let name = null;
// let text = "missing";
// let result = name ?? text
// console.log(result);

// let arr = [10, 50, 10, 42, 78, 52, 10, 54, 35, 98, 110];
// let newel = 87;
// let position = 2;

// for(let i = arr.length-1; i>=0; i--) {
//     if(i>=position){
//         arr[i+1] = arr[i];

//         if(i == position){
//             arr[i] = newel;
//         }
//     }
// }
// console.log(arr);

















