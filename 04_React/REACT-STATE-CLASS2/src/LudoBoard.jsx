import { useState } from "react";

export default function LudoBoard() {
    let [Moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });


    let [arr, SetArr] = useState(["no moves"]);

    // let [count , setCount] = useState(0);


    let updateBlue = () => {
        // setMoves((prevMoves) => {
        //     return {...prevMoves, blue:  prevMoves.blue + 1}
        // });


        
        SetArr((prevArr) => { return [...prevArr, "blue Moves"]});
        console.log(arr);
    };

    
    let updateYellow = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, yellow:  prevMoves.yellow + 1}
        });
    };

    return (
        <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue Move = {Moves.blue} </p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>
                <p>Yellow Move = {Moves.yellow}</p>
                <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateYellow}>+1</button>
                <p>Green Move = {Moves.green}</p>
                <button style={{ backgroundColor: "green" }}>+1</button>
                <p>Red Move ={Moves.red}</p>
                <button style={{ backgroundColor: "red" }}>+1</button>

            </div>
        </div>
    );
}