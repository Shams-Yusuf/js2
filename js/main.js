/////1
console.log(document.head.firstChild.nextSibling);
console.log(document.head.lastChild.previousSibling);
/////

/////2
console.log(document.body.firstElementChild);

/////

/////3
let ul = document.getElementById("ul");
console.log(ul.firstElementChild);
/////

/////4
let li = document.querySelector(".li");
console.log(li);
/////

/////5
li.style.backgroundColor = "green";
li.style.fontSize = "25px";
/////

/////6
ul.append("loren");
ul.before("looren");
ul.prepend("sghghs");
ul.after("ssfd");
/////

/////7
li = document.createElement("div");
li.append("dddd");
li.innerText = "dass";
ul.append(li);
console.log(li);
/////
