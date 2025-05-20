import CustomButton from './CustomButton';

function WelcomeScreen({handleStart, difficulty, setDifficulty, color, setColor}) {

    return(
        <>
            <button onClick={handleStart}>Play</button>
            <div className="difficulty-button-container">
                <CustomButton buttonType="Easy" handleClick={(e) => setDifficulty(e.target.name)}/>
                <CustomButton buttonType="Medium" handleClick={(e) => setDifficulty(e.target.name)}/>
                <CustomButton buttonType="Hard" handleClick={(e) => setDifficulty(e.target.name)}/>
            </div>
            <h1>The difficulty is {difficulty}</h1>
            <div className="color-button-container">
                <CustomButton buttonType="White" handleClick={(e) => setColor(e.target.name)}/>
                <CustomButton buttonType="Blue" handleClick={(e) => setColor(e.target.name)}/>
                <CustomButton buttonType="Green" handleClick={(e) => setColor(e.target.name)}/>
                <CustomButton buttonType="Red" handleClick={(e) => setColor(e.target.name)}/>
                <CustomButton buttonType="Black" handleClick={(e) => setColor(e.target.name)}/>
            </div>
            <h1>The color is {color}</h1>
        </>
    );

}

export default WelcomeScreen;