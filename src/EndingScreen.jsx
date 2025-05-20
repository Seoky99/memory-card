function EndingScreen({hasWon}) {

    return (
        <>
            <h1>You {hasWon ? "won!" : "lost!"}</h1>
        </>    
    );

}

export default EndingScreen; 