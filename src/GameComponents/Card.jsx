function Card({cardSrc, cardName, handleClick, cardId}) {
    return(
        <button onClick={() => handleClick(cardId)}>
            <h3>I am card {cardName}</h3>
            <img src={cardSrc} height="200px" width="150px"></img>
        </button>
    );

}

export default Card; 