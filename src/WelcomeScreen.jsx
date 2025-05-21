import CustomButton from './CustomButton';
import {useState} from 'react';

function WelcomeScreen({handleStart, setDifficulty, setColor}) {

    const [ sDID, setSDID ] = useState(-1); 
    const [ sCID, setSCID ] = useState(-1);

    const difficulties = ["Easy", "Medium", "Hard"]; 
    const colors = ["White", "Blue", "Green", "Red", "Black"];


    const difficultyList = difficulties.map((difficulty, index) => {
        return <CustomButton buttonType={difficulty} handleClick={(e) => {setDifficulty(e.target.name); setSDID(index);}} selected={sDID === index} key={index}></CustomButton>;})

    const colorList = colors.map((color, index) => {
        return <CustomButton buttonType={color} handleClick={(e) => {setColor(e.target.name); setSCID(index);}} selected={sCID === index} key={index}></CustomButton>;})

    return(
        <div className="welcome-content-container">
            <div className="difficulty-button-container">
                {difficultyList}
            </div>
            <div className="color-button-container">
                {colorList}
            </div>
            <button id="play-button" onClick={handleStart}>Play</button>
        </div>
    );

}

export default WelcomeScreen;