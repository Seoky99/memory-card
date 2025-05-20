import DifficultyButton from './DifficultyButton';

function WelcomeScreen({handleStart, difficulty, setDifficulty}) {

    function handleClick(e) {
        setDifficulty(e.target.name);
    }

    return(
        <>
            <button onClick={handleStart}>Play</button>
            <div className="button-container">
                <DifficultyButton buttonType="Easy" handleClick={handleClick}/>
                <DifficultyButton buttonType="Medium" handleClick={handleClick}/>
                <DifficultyButton buttonType="Hard" handleClick={handleClick}/>
            </div>
            <h1>The difficulty is {difficulty}</h1>
        </>
    );

}

export default WelcomeScreen;