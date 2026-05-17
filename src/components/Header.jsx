export function Header(){
    return( 
        <>
            <header className="my-8 flex justify-center items-center gap-4">
                <div className="w-12 h-12 p-2 gap-1 flex flex-wrap justify-center items-center rounded-md shadow-lg bg-teal-50">
                    <div className="w-3 h-3  border-4 border-teal-300"></div>
                    <div className="w-3 h-3  border-4 border-teal-500"></div>
                    <div className="w-3 h-3  border-4 border-teal-500"></div>
                    <div className="w-3 h-3  border-4 border-teal-300"></div>
                  
                </div>
                <div className="flex flex-col items-start ">
                    <h1 className="uppercase text-center text-[clamp(1.2rem,3vw,3.5rem)] font-bold text-gray-800">tic tac toe</h1>
                    <p className="uppercase text-center text-[clamp(0.6rem,1.5vw,1rem)] text-gray-500">Play classic game of Tic-Toc-Toe</p>
                </div>
           
           </header>
        </>
    )
}