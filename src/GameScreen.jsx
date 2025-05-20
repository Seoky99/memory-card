import CardList from "./GameComponents/CardList";
import Scoreboard from "./Scoreboard";
import { useState } from 'react'; 

import pic0 from "./assets/numbers/0.png"; 
import pic1 from "./assets/numbers/1.png";
import pic2 from "./assets/numbers/2.png";

const initialData = [
    {
        id: crypto.randomUUID(),
        imgSrc: pic0, 
        cardName: "Bubby",
    },
    {
        id: crypto.randomUUID(),
        imgSrc: pic1, 
        cardName: "Nubby",
    }, 
    {
        id: crypto.randomUUID(),
        imgSrc: pic2, 
        cardName: "Tubby",
    }
]

const shuffle = (array) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 

function GameScreen({handleLose}) {

    const [ score, setScore ] = useState(0);
    const [ cards, setCards ] = useState(initialData); 
    const [ pickedCards, setPickedCards ] = useState(new Set());

    function handleClick(cardId) {

        //shuffle the cards 
        const newCards = [...cards]; 
        setCards(shuffle(newCards));

        if (pickedCards.has(cardId)) {
            setScore(0);
            handleLose(); 
        } else {
            setScore(score + 1); 
            const newSet = new Set(pickedCards); 
            newSet.add(cardId);
            setPickedCards(newSet);
        } 
    }
    
    return (
        <>
            <Scoreboard score={score}></Scoreboard>
            <CardList cards={cards} handleClick={handleClick}></CardList>
        </>
    );
}

export default GameScreen;