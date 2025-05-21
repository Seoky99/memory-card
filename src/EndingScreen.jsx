function EndingScreen({hasWon, handleStatus}) {

    return (
        <div className="ending-screen">
            <h1>You {hasWon ? "won!" : "lost!"}</h1>
            <button onClick={() => handleStatus("setup")}>Play again?</button>
        </div>    
    );

}

export default EndingScreen; 