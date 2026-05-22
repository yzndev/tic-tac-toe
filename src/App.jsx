import { GameBoard } from "./components/GameBoard"
import { GameStatus } from "./components/GameStatus"
import { Header } from "./components/Header"
import { ScoreBoard } from "./components/ScoreBoard"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./components/win"
import StartGameModal from "./components/StarterModal"
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [starterModal, setStarterModal] = useState(true)
  const [gameSetup, setGameSetup] = useState({})
  const [gameScore, setGameScore] = useState({
    player1:0,
    player2:0,
    draw:0,
    currentRound:1
  })

  const gameBoard = [...INITIAL_GAME_BOARD.map(innerItem => [...innerItem])]
  for (let turn of gameTurns) {
    const { square, symbol } = turn
    const { rowIndex, colIndex } = square
    gameBoard[rowIndex][colIndex] = symbol
  }
  let winner = null
  const activePlayer = gameTurns.length % 2 == 0 ? "X" : "O"
  for (let combiantion of WINNING_COMBINATIONS) {
    const { row: frow, column: fcol } = combiantion[0]
    const { row: srow, column: scol } = combiantion[1]
    const { row: trow, column: tcol } = combiantion[2]

    if (gameBoard[frow][fcol] && gameBoard[frow][fcol] === gameBoard[srow][scol] &&
      gameBoard[frow][fcol] === gameBoard[trow][tcol]
    ) {
      winner = gameBoard[frow][fcol]
    }
  }
  let draw = gameTurns.length === 9 && !winner

  function resetBoard() {
    setGameTurns([])
  }
  function handleSelectSquare(row, col) {
    if (gameBoard[row][col] !== null || winner) {
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
  function handleStart(data) {
    setGameSetup({
      X: data.player1,
      O: data.mode === 'vsComputer' ? 'CPU' : data.player2,
      mode: data.mode,
      totalRounds: data.rounds
    });
    setStarterModal(false)
  }

  return (
    <>
      {starterModal ? <StartGameModal onStart={handleStart}></StartGameModal> : null}
      <Header></Header>
      <div className="w-full max-w-5xl mx-auto mt-10 p-6">
        <div className="grid md:grid-cols-[1fr_2fr_1fr] gap-10">
          <ScoreBoard gameData={{
            firstPlayer:[gameSetup.X, gameScore.player1,],
            secondPlayer:[gameSetup.O, gameScore.player2,],
            draw:gameScore.draw,
            round:gameScore.currentRound
          }}></ScoreBoard>
          <GameBoard board={gameBoard} onSelect={handleSelectSquare}></GameBoard>
          <GameStatus
            currentPlayer={{
              name: gameSetup[activePlayer],
              symbol: activePlayer
            }}
            winner={{
              symbol: winner,
              name: gameSetup[winner]
            }}
            draw={draw}
            onReset={resetBoard}></GameStatus>
        </div>
      </div>
    </>
  )
}

export default App
