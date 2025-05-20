import CardList from "./GameComponents/CardList";
import Scoreboard from "./Scoreboard";
import { useState, useEffect } from 'react'; 

const shuffle = (array) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 

function GameScreen({handleStatus, numRounds, color}) {

    const [ score, setScore ] = useState(0);
    const [ cards, setCards ] = useState([]); 
    const [ pickedCards, setPickedCards ] = useState(new Set());

    const [ loading, setLoading ] = useState(true);

    const url = `https://api.scryfall.com/cards/search?q=cmc=1+color=${color}&unique=cards`; 


    function handleClick(cardId) {
        const newCards = [...cards]; 
        setCards(shuffle(newCards));

        if (pickedCards.has(cardId)) {
            setScore(0);
            handleStatus("lose"); 
        } else {
            setScore(prevScore => { 
                
                const newSet = new Set(pickedCards); 
                newSet.add(cardId);
                setPickedCards(newSet);

                if (prevScore + 1 === numRounds) {
                    handleStatus("win");
                }
                return prevScore+1; 
            }); 
        } 
    }

    useEffect( () => {

        let ignore = false; 

        function convertData(data) {

            const slicedData = data.data.slice(0, numRounds);

            const newData = slicedData.map(data => {return { 
                id: data.id,
                imgSrc: data.image_uris.small, 
                cardName: data.name,
            }});

            if (!ignore) {
                setCards(newData);
            }
        }

        async function fetchData() {
            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const fetchedData = await response.json(); 
                convertData(fetchedData);
            } catch(err) {
                console.log(`Fetch error:" ${err}`);
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        return () => { ignore = true; }
    }, [numRounds])


    
    return (
        <>
            {loading && <h1>Loading...</h1>}
            {!loading && <Scoreboard score={score} numRounds={numRounds}></Scoreboard>}
            {!loading && <CardList cards={cards} handleClick={handleClick}></CardList>}
        </>
    );
}

export default GameScreen;