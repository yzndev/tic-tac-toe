export function ScoreBoard() {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4">
            <h2 className="text-center font-semibold text-gray-600">SCORE BOARD</h2>
            <div>
                <p>Player 1: X</p>
                <p>Player 2: O</p>
                <p>Draw: </p>
                <p>Round:</p>
            </div>
        </div>
    )
}