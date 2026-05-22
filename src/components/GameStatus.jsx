export function GameStatus({ onReset, currentPlayer, winner }) {
  const hasWinner = winner?.symbol;
  let content;

  if (hasWinner) {
    content = {
      name: winner.name,
      symbol: winner.symbol,
      description: "Won!!!"
    }
  } else {
    content = {
      name: currentPlayer.name,
      symbol: currentPlayer.symbol,
      description: `You are : ${currentPlayer.symbol}`
    }
  }


  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center gap-4">
        <p className="uppercase">game Status</p>

        <div className="p-4 flex justify-center items-center border-teal-600 border-4 w-24 h-24">
          <div className="font-extrabold text-teal-700 text-6xl">
            {content.symbol}
          </div>
        </div>

        <p className="font-sans text-gray-700">{content.name}</p>
        <p className="text-sm text-gray-500">{content.description}</p>
      </div>

      <button
        onClick={onReset}
        className="bg-teal-800 hover:bg-gray-900 transition text-white rounded-xl py-3 shadow-lg"
      >
        Restart Game
      </button>
    </div>
  );
}