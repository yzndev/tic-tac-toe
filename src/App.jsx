import { GameBoard } from "./components/GameBoard"
import { GameStatus } from "./components/GameStatus"
import { Header } from "./components/Header"
import { ScoreBoard } from "./components/ScoreBoard"
import { useState, useEffect } from "react"
import GameOverModal from "./components/GameOver"
import StartGameModal from "./components/StarterModal"
import { getCpuMove } from "./game/cpu"
import { MODAL_TYPES, INITIAL_GAME_SCORE } from "./game/const"
import { checkWinner, createBoard, driveActivePlayer,hasDraw } from "./game/rules"




function App() {
 
  const [gameTurns, setGameTurns] = useState([])
  const [modal, setModal] = useState(MODAL_TYPES.START)
  const [gameSetup, setGameSetup] = useState({})
  const [gameScore, setGameScore] = useState(INITIAL_GAME_SCORE)
  
  
  const gameBoard = createBoard(gameTurns)
  const activePlayer = driveActivePlayer(gameTurns)

  let winner = checkWinner(gameBoard)
  let draw = hasDraw(gameTurns, winner)

  const roundFinished = winner || draw

  useEffect(() => {
    if (!winner && !draw) return;
    setGameScore(prevScore => {
      const updatedScore = { ...prevScore };
      if (winner === "X") updatedScore.X++;
      else if (winner === "O") updatedScore.O++;
      else if (draw) updatedScore.draw++;

      if (prevScore.currentRound <= gameSetup.totalRounds) {
        updatedScore.currentRound++;
      }

      return updatedScore;
    });

  }, [winner, draw, gameSetup.totalRounds]);
  useEffect(() => {
    if (!roundFinished) return;
    if (gameScore.currentRound <= gameSetup.totalRounds) {
      setGameTurns([])
    }

  }, [gameScore.currentRound]);
  useEffect(() => {
    if (gameSetup.mode !== 'vsComputer') return;
    if (activePlayer !== 'O') return;
    if (winner || draw) return;

    let isMounted = true; 

    const timer = setTimeout(() => {
      if (isMounted) {
        const move = getCpuMove(gameBoard, 'O', 'X');
        handleSelectSquare(move.row, move.col, true);
      }
    }, 1500); 
    return () => {
        isMounted = false;
        clearTimeout(timer);
    };
}, [gameTurns, activePlayer, gameSetup.mode])

  const isGameOver = gameScore.currentRound > gameSetup.totalRounds;

  function resetGame() {
    setGameTurns([])
    setModal(MODAL_TYPES.START)
    setGameScore({
      X: 0,
      O: 0,
      draw: 0,
      currentRound: 1
    })
  }
  useEffect(() => {
    if (isGameOver) {
      setModal(MODAL_TYPES.END);
    }
  }, [isGameOver]);
  function handleSelectSquare(row, col, isCpu=false) {
    if (gameBoard[row][col] !== null || winner) {
      return;
    }
    if (!isCpu && gameSetup.mode === 'vsComputer' && activePlayer === 'O') {
    return;
  }
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
    setModal(MODAL_TYPES.NONE)
  }

  return (
    <>
      {modal === "end" ? <GameOverModal
        winner={winner}
        draw={draw}
        onReset={resetGame}
        score={gameScore}
        playerNames={gameSetup}
      ></GameOverModal> : null}
      {modal === "start" ? <StartGameModal onStart={handleStart}></StartGameModal> : null}
      <Header></Header>
      <div className="w-full max-w-5xl mx-auto mt-10 p-6">
        <div className="grid md:grid-cols-[1fr_2fr_1fr] gap-10">
          <ScoreBoard gameData={{
            firstPlayer: [gameSetup.X, gameScore.X,],
            secondPlayer: [gameSetup.O, gameScore.O,],
            draw: gameScore.draw,
            round: gameScore.currentRound
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
            onReset={resetGame}></GameStatus>
        </div>
      </div>
    </>
  )
}

export default App
