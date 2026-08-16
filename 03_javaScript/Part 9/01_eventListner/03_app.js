

let btns = document.querySelectorAll("button");
// console.dir(btn);

// btn.onclick = function () {
//     alert("button was clicked");
// };

// to apply to all buttons 
for (btn of btns){
    btn.onclick = sayhello;
    btn.onmouseenter = function (){
        console.log("you entered a button");
    };
    console.dir(btn);
}

function sayhello (){
    alert("Hello");
}

// btn.onclick = sayhello;