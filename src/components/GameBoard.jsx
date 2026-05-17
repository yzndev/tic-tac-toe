const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export function GameBoard() {
  return (
    <ol className="aspect-square bg-white rounded-xl shadow-sm p-6 grid grid-cols-3 gap-4">
      {INITIAL_GAME_BOARD.map((row, rowIndex) =>
        row.map((playerSymbol, colIndex) => (
          <li key={`${rowIndex}-${colIndex}`}>
            <button 
            className="hover:bg-teal-100 aspect-square rounded-lg bg-[#F7FAFB] flex items-center justify-center font-bold text-6xl text-teal-600 w-full">
            </button>
          </li>
        ))
      )}
    </ol>
  );
}
