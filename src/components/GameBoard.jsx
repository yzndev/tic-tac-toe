export function GameBoard({board, onSelect}) {
  console.log(board)
  return (
    <ol className="aspect-square bg-white rounded-xl shadow-sm p-6 grid grid-cols-3 gap-4">
      {board.map((row, rowIndex) =>
        row.map((playerSymbol, colIndex) => (
          <li key={`${rowIndex}-${colIndex}`}>
            <button 
            onClick={()=>onSelect(rowIndex, colIndex)}
            className="hover:bg-teal-100 aspect-square rounded-lg bg-[#F7FAFB] flex items-center justify-center font-bold text-6xl text-teal-600 w-full">
              {playerSymbol}
            </button>
          </li>
        ))
      )}
    </ol>
  );
}
