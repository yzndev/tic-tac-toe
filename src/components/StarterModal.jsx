import {useState} from 'react'
import { modeButtonClass } from './helper';


export default function StartGameModal({handleStart}) {
  const [gameData, setGameData] = useState({
    player1:"player1",
    player2:"player2",
    rounds:1,
    mode:"vsComputer"
  }) 
  function handleChange(event){
      const {name, value} = event.target
      setGameData((prevGameData)=>{
        const updateGameData = {...prevGameData}
        updateGameData[name] = value
        return updateGameData
      })
  }
 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6">

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Start New Game
          </h2>
          <p className="text-sm text-gray-500">
            Setup players and rounds
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-600">Player 1 Name</label>
          <input
            name='player1'
            onChange={handleChange}
            defaultValue='player1'
            type="text"
            placeholder="Enter player name"
            className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

       <div className="flex flex-col gap-3">
          <label className="text-sm text-gray-600">Game Mode</label>

          <div className="flex gap-3">
            <button
                onClick={() => setGameData(prev => ({ ...prev, mode: "vsComputer" }))}
                className={modeButtonClass(gameData.mode === 'vsComputer')}>
            vs Computer
            </button>


            <button
                name='mode'
                onClick={ () => setGameData(prev => ({ ...prev, mode: "vsPlayer" }))}
                className={modeButtonClass(gameData.mode === 'vsPlayer')}

            >
            vs Player
            </button>
          </div>
        </div>
        {gameData.mode === 'vsPlayer' ? 
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-600">Player 2 Name</label>
          <input
            name='player2'
            defaultValue='player2'
            onChange={handleChange}
            type="text"
            placeholder="Enter second player"
            className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>
        :
        undefined
        }
        
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-600">Number of Rounds</label>
          <select name="rounds" onChange={handleChange} className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400">
            <option>1</option>
            <option>3</option>
            <option>5</option>
            <option>7</option>
          </select>
        </div>

        <button onClick={()=>handleStart(gameData)} className="mt-2 bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg shadow-md transition">
          Start Game
        </button>

      </div>

    </div>
  );
}
