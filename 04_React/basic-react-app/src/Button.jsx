function handleClick (event){
  console.log("Hello world");
  console.log(event);

}

function handleMouseOver (){
    console.log("bye!");
}


function handleDoubleClick (){
    console.log("You double Clicked")

}
export default function Button(){
    return (
        <div>
            <button onClick = {handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem perferendis, aliquid voluptas nulla ea voluptatibus illo pariatur, beatae saepe corrupti dignissimos excepturi. Quos assumenda possimus, provident veniam temporibus dolor recusandae?</p>
            <button onDoubleClick={handleDoubleClick}>double click me</button>
        </div>
    );
}