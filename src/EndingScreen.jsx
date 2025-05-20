function EndingScreen({hasWon, handleStatus}) {

    return (
        <>
            <h1>You {hasWon ? "won!" : "lost!"}</h1>
            <button onClick={() => handleStatus("setup")}>Play again?</button>
        </>    
    );

}

export default EndingScreen; 