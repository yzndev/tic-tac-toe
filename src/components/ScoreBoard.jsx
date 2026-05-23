export function ScoreBoard({ gameData }) {
  const [name1, score1] = gameData.firstPlayer;
  const [name2, score2] = gameData.secondPlayer;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-6">
      <h2 className="text-center font-bold text-gray-700 tracking-wider text-sm uppercase">
        Score Board
      </h2>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center bg-teal-50 p-3 rounded-lg">
          <span className="font-medium text-teal-800">{name1} (X)</span>
          <span className="text-xl font-bold text-teal-600">{score1}</span>
        </div>
        <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
          <span className="font-medium text-gray-700">{name2} (O)</span>
          <span className="text-xl font-bold text-gray-600">{score2}</span>
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-500 px-2">
        <p>Draws: <span className="font-bold text-gray-700">{gameData.draw}</span></p>
        <p>Round: <span className="font-bold text-teal-600">{gameData.round}</span></p>
      </div>
    </div>
  );
}
