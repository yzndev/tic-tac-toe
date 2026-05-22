export function ScoreBoard({gameData}) {
    const player1 = gameData.firstPlayer
    const player2 = gameData.secondPlayer
    const draw = gameData.draw
    const round = gameData.round
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4">
            <h2 className="text-center font-semibold text-gray-600">SCORE BOARD</h2>
            <div>
                <p>{player1[0]}: {player1[1]}</p>
                <p>{player2[0]}: {player2[1]}</p>
                <p>Draw: {draw} </p>
                <p>Round:{round}</p>
            </div>
        </div>
    )
}