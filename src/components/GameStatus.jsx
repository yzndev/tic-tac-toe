export function GameStatus(){
    

    return(
        <div className="flex flex-col gap-6">
          <div className='bg-white rounded-xl shadow-sm  p-6 flex flex-col items-center gap-4'>
            <p className="uppercase">game Status</p>
            <div className="p-4 flex justify-center items-center border-teal-600 border-6 w-24 h-24 ">
                <div className='font-extrabold text-teal-700 text-6xl'>X</div>
            </div>
            <p className="font-sans text-gray-700">player</p>
            <p className="text-sm text-gray-500">You are X</p>
          </div>

          <button className="bg-teal-800 hover:bg-gray-900 transition text-white rounded-xl py-3 shadow-lg">
            Restart Game
          </button>

        </div>
    )
}