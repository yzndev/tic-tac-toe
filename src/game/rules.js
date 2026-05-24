import { INITIAL_GAME_BOARD, WINNING_COMBINATIONS } from "./const"

export function createBoard(gameTurns){
    const gameBoard = [...INITIAL_GAME_BOARD.map(innerItem => [...innerItem])]
    for (let turn of gameTurns) {
    const { square, symbol } = turn
    const { rowIndex, colIndex } = square
    gameBoard[rowIndex][colIndex] = symbol
    }
    return gameBoard
}

export function driveActivePlayer(gameTurns){
    return gameTurns.length % 2 == 0 ? "X" : "O"
}

export function checkWinner(gameBoard){
    for (let combiantion of WINNING_COMBINATIONS) {
        const { row: frow, column: fcol } = combiantion[0]
        const { row: srow, column: scol } = combiantion[1]
        const { row: trow, column: tcol } = combiantion[2]
    
        if (gameBoard[frow][fcol] && gameBoard[frow][fcol] === gameBoard[srow][scol] &&
          gameBoard[frow][fcol] === gameBoard[trow][tcol]
        ) {
            return gameBoard[frow][fcol]
        }
        else{
            return null
        }
      }
}
export function hasDraw(gameTurns, winner){
    return gameTurns.length === 9 && !winner
}