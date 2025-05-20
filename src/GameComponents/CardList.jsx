import Card from "./Card"

function CardList({cards, handleClick}) {
    
    const renderCardsList = cards.map(card => <Card cardSrc={card.imgSrc} cardName={card.cardName} 
        key={card.id} handleClick={handleClick} cardId={card.id}></Card>);

    return (
        <div className="card-container">
            {renderCardsList}
        </div>
    );
}

export default CardList; 