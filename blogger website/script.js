// var element;

// document.getElementById("shiv").addEventListener("click", abc);

// function abc(){
//     document.getElementById("shiv").classList
// }
// var a = document.getElementById("shiv").classList.contains('zhi')
// console.log(a);

// var a  = document.getElementById("shiv").parentElement
// console.log(a);


// var a  = document.getElementById("shiv").children[0]
// console.log(a);


// var a  = document.getElementById("shiv").childNodes[1]
// console.log(a);

// var a = document.getElementById("shiv").firstElementChild.innerText
// console.log(a);

// var a = document.getElementById("shiv").firstChild
// console.log(a);

// var a = document.getElementById("shiv").nextElementSibling
// console.log(a);

// var element = document.createElement("h2")
// var text = document.createTextNode("this is shivam kumar")

// element.appendChild(text)

// // document.getElementById("shiv").appendChild(element)

// var target = document.getElementById("shiv");
// target.insertBefore(element, target.childNodes[0])

// var newElement = document.createElement("h2");
// var newText = document.createTextNode("this is text and he is a dummy")

// newElement.appendChild(newText);

// var target = document.getElementById("shiv");
// var newText = "This is a dummy paragraph"
// target.insertAdjacentHTML("beforeend", newText)


// var newElement = document.createElement("h2")
// var newText = document.createTextNode("this is me")
// newElement.appendChild(newText);

// var target = document.getElementById("list")
// var oldelement = document.getElementById("list").children[0]

// console.log(oldelement);
// target.replaceChild(newElement, oldelement)


// var target = document.getElementById("list-1").children[0];
// var copyElem = target.cloneNode(true);
// document.getElementById("list-2").appendChild(copyElem);


// var elem = document.getElementById("list-2");
// var docu = document.getElementById("shiv-1");
// var find = elem.contains(docu);
// console.log(find);

// var terget = document.getElementById("list-1");
// var find = terget.hasChildNodes();
// console.log(find);


function inputFunction(element){
    var x = element.value;
    document.getElementById("text").innerHTML = x;
}