import { GameBoard } from "./components/GameBoard"
import { GameStatus } from "./components/GameStatus"
import { Header } from "./components/Header"
import { ScoreBoard } from "./components/ScoreBord"

function App() {

  return (
    <>
      <Header></Header>
      <div className="w-full max-w-5xl mx-auto mt-10 p-6">
        <div className="grid md:grid-cols-[1fr_2fr_1fr] gap-10">
        <ScoreBoard></ScoreBoard>
        <GameBoard></GameBoard>
        <GameStatus></GameStatus>
        </div>
      </div>
    </>
  )
}

export default App
