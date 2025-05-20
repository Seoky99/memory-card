import './App.css'
import WelcomeScreen from './WelcomeScreen'
import GameScreen from './GameScreen.jsx'
import {useState} from 'react'; 


function App() {

  const [ hasStarted, setHasStarted ] = useState(false); 
  const [ difficulty, setDifficulty ] = useState("Easy");

  const [ hasLost, setHasLost ] = useState(false); 

  function handleLose() {
      setHasLost(true);
  }

  return (
    <>
      {!hasStarted && <WelcomeScreen handleStart={() => setHasStarted(true)} difficulty={difficulty} setDifficulty={setDifficulty}></WelcomeScreen>}
      <p className="read-the-docs">
        The difficulty is {difficulty}
      </p>
      <GameScreen handleLose={handleLose}/>
      <h4>You have {hasLost ? "" : "not"} lost.</h4>
    </>
  )
}

export default App
