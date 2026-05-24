import { GameBoard } from "./components/GameBoard"
import { GameStatus } from "./components/GameStatus"
import { Header } from "./components/Header"
import { ScoreBoard } from "./components/ScoreBoard"
import { useState, useEffect } from "react"
import GameOverModal from "./components/GameOver"
import StartGameModal from "./components/StarterModal"
import { getCpuMove } from "./game/cpu"
import { MODAL_TYPES, INITIAL_GAME_SCORE } from "./game/const"
import { checkWinner, createBoard, driveActivePlayer, hasDraw } from "./game/rules"
import { useTicTacToe } from "./hooks/useTicTacToe"




function App() {

  const {
    gameBoard, activePlayer, winner, draw, gameScore, gameSetup, modal, handleSelectSquare, handleStart, resetGame
  } = useTicTacToe()

  return (
    <>
      {modal === "end" && <GameOverModal
        winner={winner}
        draw={draw}
        onReset={resetGame}
        score={gameScore}
        playerNames={gameSetup}
      ></GameOverModal>}
      {modal === "start" && <StartGameModal onStart={handleStart}></StartGameModal> }
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
