import { useState, useEffect } from "react";

export default function Joker() {
    const URL = "https://official-joke-api.appspot.com/random_joke";
    
    // Initial state empty object rakho
    let [joke, setJoke] = useState({});

    const getNewJoke = async () => {
        try {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            
            console.log(jsonResponse);
            
            // State update yahan zaroori hai
            setJoke({ 
                setup: jsonResponse.setup, 
                punchline: jsonResponse.punchline 
            });
        } catch (error) {
            console.error("Error fetching joke:", error);
        }
    };

    // page load hote hi joke dikhe:
    useEffect(() => {
        getNewJoke();
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h3>Joker!</h3>
            <h2>{joke.setup}</h2>
            <h3 style={{ color: "gray", fontStyle: "italic" }}>
                {joke.punchline}
            </h3>
            
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    );
}