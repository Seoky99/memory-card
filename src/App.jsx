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
  const [ gameStatus, setGameStatus ] = useState("setup"); 

  return (
    <>
      {gameStatus === "setup" && <WelcomeScreen handleStart={() => setGameStatus("ongoing")} difficulty={difficulty} setDifficulty={setDifficulty}></WelcomeScreen>}

      {gameStatus === "ongoing" && <GameScreen handleStatus={setGameStatus} numRounds={numberOfRounds[difficulty]}/>}
      {gameStatus === "ongoing" && <h4>You have {gameStatus==="lose" ? "" : "not"} lost.</h4>}

      {(gameStatus === "lose" || gameStatus === "win") &&<EndingScreen/>}
    </>
  )
}

export default App
