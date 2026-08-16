// way to select using DOM

// select using class name 

// let smallImg = document.getElementsByClassName("oldImg");

// for (let i=0; i<smallImg.length; i++){
//     smallImg[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed.`);
// }


// QuerySelector 


// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));


// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll("div a"));



// manipulating style 

let links = document.querySelectorAll(".box a");

for (let i=0; i<links.length; i++) {
    links[i].style.color = "red"
}

