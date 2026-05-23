import { WINNING_COMBINATIONS } from "./win";

export function getCpuMove(board, cpuSymbol, playerSymbol) {

  const winMove = findWinningMove(board, cpuSymbol);
  if (winMove) return winMove;

  const blockMove = findWinningMove(board, playerSymbol);
  if (blockMove) return blockMove;

  if (!board[1][1]) {
    return { row: 1, col: 1 };
  }

  const corners = [
    { row: 0, col: 0 },
    { row: 0, col: 2 },
    { row: 2, col: 0 },
    { row: 2, col: 2 },
  ];

  const emptyCorner = corners.find(c => !board[c.row][c.col]);
  if (emptyCorner) return emptyCorner;

  const emptySquares = [];

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (!board[r][c]) {
        emptySquares.push({ row: r, col: c });
      }
    }
  }

  return emptySquares[Math.floor(Math.random() * emptySquares.length)];
}

function findWinningMove(board, symbol) {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    const cells = [
      board[a.row][a.column],
      board[b.row][b.column],
      board[c.row][c.column]
    ];
    const symbolCount = cells.filter(cell => cell === symbol).length;
    const emptyIndex = cells.findIndex(cell => cell === null);

    if (symbolCount === 2 && emptyIndex !== -1) {
      const move = combination[emptyIndex];
      return { row: move.row, col: move.column };
    }
  }

  return null;
}