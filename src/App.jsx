import "./App.css";
import React, { useEffect, useState } from "react";
//2 components
const Guess = ( {word , guess} )=>{
  
}

const Game = ( {word} ) =>{
  //useState
  const [count,setCount] = useState(0)//count starts at 0
  const [guess,setGuess] = useState("")//empty string
  const [guesses,setGuesses] = useState([])//empty guesses array
  const [correctGuess,setCorrectGuess] = useState(false)//start with false

  //functions??
  const handleGuess = async (newGuess) =>{
    setCount ((count)=>count+1) //update count 
    setGuesses([...guesses,newGuess])//create new array with new guess added to it
    if (guess === word){
      setCorrectGuess(true)//correct guess
    }
    setGuess("");
  }


  return(
    <div>
      <h1>World Wide Wordle</h1>
      <p>Guess the secret word!</p>
      
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Game word = "cable"/>
      
    </div>
  );
}

export default App;