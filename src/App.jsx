import './App.css'
import WelcomeScreen from './WelcomeScreen'
import GameScreen from './GameScreen.jsx'
import {useState} from 'react'; 
import EndingScreen from './EndingScreen.jsx';

const numberOfRounds = {
  "Easy": 3, 
  "Medium": 5, 
  "Hard": 7 
};

function App() {

  const [ difficulty, setDifficulty ] = useState("Easy");
  const [ color, setColor ] = useState("White");
  const [ gameStatus, setGameStatus ] = useState("setup"); 

  return (
    <div className="content-container">
      {gameStatus === "setup" && 
        <WelcomeScreen handleStart={() => setGameStatus("ongoing")} setDifficulty={setDifficulty} setColor={setColor}> </WelcomeScreen>}

      {gameStatus === "ongoing" && <GameScreen handleStatus={setGameStatus} numRounds={numberOfRounds[difficulty]} color={color}/>}
      {gameStatus === "ongoing" && <h4>You have {gameStatus==="lose" ? "" : "not"} lost.</h4>}

      {(gameStatus === "lose" || gameStatus === "win") && <EndingScreen hasWon={gameStatus === "win"} handleStatus={setGameStatus}/>}
    </div>
  )
}

export default App
