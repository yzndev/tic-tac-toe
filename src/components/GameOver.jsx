export default function GameOverModal({ winner, draw, onReset, score, playerNames }) {
  const isWinner = winner !== null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6 text-center">  
        <div>
          <h2 className="text-3xl font-bold text-gray-700">
            {isWinner ? "Game Over!" : "It's a Draw!"}
          </h2>
          <p className="text-gray-500 mt-2">
            {isWinner ? `Congratulations ${playerNames[winner]}!` : "The board is full."}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl flex justify-between items-center text-sm">
          <div>
            <p className="text-gray-500">{playerNames.X} (X)</p>
            <p className="text-xl font-bold text-teal-600">{score.X}</p>
          </div>
          <div className="h-8 w-px bg-gray-200"></div>
          <div>
            <p className="text-gray-500">Draws</p>
            <p className="text-xl font-bold text-gray-600">{score.draw}</p>
          </div>
          <div className="h-8 w-px bg-gray-200"></div>
          <div>
            <p className="text-gray-500">{playerNames.O} (O)</p>
            <p className="text-xl font-bold text-teal-600">{score.O}</p>
          </div>
        </div>

        <button 
          onClick={onReset} 
          className="bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg shadow-md transition font-medium"
        >
          Play Again
        </button>

      </div>
    </div>
  );
}
