let btns = document.querySelectorAll("button");


for (btn of btns){


btn.addEventListener("click", sayhello);
btn.addEventListener("click", sayName);
}

function sayhello (){
    alert("Hello");
}

function sayName (){
    alert("Apna College");
}
