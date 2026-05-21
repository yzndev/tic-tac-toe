import { GameBoard } from "./components/GameBoard"
import { GameStatus } from "./components/GameStatus"
import { Header } from "./components/Header"
import { ScoreBoard } from "./components/ScoreBord"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./components/win"
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([])


  const gameBoard = [...INITIAL_GAME_BOARD.map(innerItem => [...innerItem])]
  for (let turn of gameTurns) {
    const { square, symbol } = turn
    const { rowIndex, colIndex } = square
    gameBoard[rowIndex][colIndex] = symbol
  }
  let winner = false
  const activePlayer = gameTurns.length % 2 == 0 ? "X" : "O"

  function handleSelectSquare(row, col) {
    if (gameBoard[row][col] !== null) {
      return;
    }
    console.log(gameBoard[row][col])
    setGameTurns(
      prevTurn => {
        const updatedTurn = [
          ...prevTurn,
          {
            square: { rowIndex: row, colIndex: col },
            symbol: activePlayer
          }
        ]
        return updatedTurn
      }
    )
  }
  // console.log(gameTurns)

  return (
    <>
      <Header></Header>
      <div className="w-full max-w-5xl mx-auto mt-10 p-6">
        <div className="grid md:grid-cols-[1fr_2fr_1fr] gap-10">
          <ScoreBoard ></ScoreBoard>
          <GameBoard board={gameBoard} onSelect={handleSelectSquare}></GameBoard>
          <GameStatus></GameStatus>
        </div>
      </div>
    </>
  )
}

export default App
