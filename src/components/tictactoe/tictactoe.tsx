import { useState } from "react";
import { Board } from "./board";
import TicTacToeIcon from '../../assets/icons/tic-tac-toe.png';
import { Sidebar } from "../sidebar/sidebar";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

type BoardArray = Array<Array<string | null>>;

const makeComputerMove = (board: BoardArray): [number, number] => {
  const emptyCells: [number, number][] = [];
  board.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      if(!cell) {
        emptyCells.push([rowIndex, cellIndex]);
      }
    })
  });

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  return emptyCells[randomIndex];
};

const checkWinner = (board: BoardArray): string | null => {
  const lines = [
    //Rows
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],
    //columns
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    //diagonals
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ];

  for (const line of lines) {
    if(line[0] && line[0] === line[1] && line[1] === line[2]) {
      return line[0];
    }
  }
  return null;
};

export const TicTacToe = () => {
  const initialBoard = Array.from({ length: 3 }, 
    () => Array.from({ length: 3 }, () => null)
  );
  const [board, setBoard] = useState<BoardArray>(initialBoard);
  const [player, setPlayer] = useState<string>("X"); 
  const [winner, setWinner] = useState<string | null >(null); 
  const [isNoWinner, setIsNoWinner] = useState<boolean>(false);


  const handleOnClick = (row: number, col: number) => {
    if(board[row][col] || winner){
      return;
    }

    const updatePlayerBoard = board.map((newRow, rowIndex) => 
      newRow.map((cell, cellIndex) => 
        rowIndex === row && cellIndex === col ? player : cell )
      );

    setBoard(updatePlayerBoard);
    const newWinner = checkWinner(updatePlayerBoard);
    setWinner(newWinner);
    setPlayer("X");
    
    //no winner
    const hasNullValue = updatePlayerBoard.some((row) => 
      row.some((cell) => cell === null)
    );
    if(!winner && !hasNullValue) {
      setIsNoWinner(true); 
      return;
    }
    
    //computer's move
    if(!newWinner) {
      const [computerRow, computerCol] = makeComputerMove(updatePlayerBoard);
      const updateComputerBoard = updatePlayerBoard.map((newRow, rowIndex) => 
        newRow.map((cell, cellIndex) => 
          rowIndex === computerRow && cellIndex === computerCol ? "O" : cell )
        );
      
      setTimeout(() => {
        setBoard(updateComputerBoard);
        setWinner(checkWinner(updateComputerBoard));
      }, 200) //delay
    }
  }

  const resartGame = () => {
    setBoard(initialBoard);
    setWinner(null);
    setPlayer("X");
    setIsNoWinner(false);
  }

  const navigate = useNavigate();
  const back = () => navigate('/jogo-da-velha');
  const inicio = () => navigate('/');
  const exit = () => {
    if (confirm("Deseja sair mesmo?")) {
      alert("então, tá.");
      inicio();
    } else {
      return;
    }
  }
  return (
    <div className="tic-tac-toe h-screen w-full xl:h-screen bg-[#0f172a] text-[#FFFFFF] pt-20 pb-10 flex flex-col xl:flex-row justify-center">
      <Sidebar/>
      <div className="flex flex-col items-center justify-center max-sm:ml-24 max-sm:scale-[85%]">
        <div className='bg-[#473080] rounded-full p-2 flex justify-center items-center h-20 w-20 mb-2'>
          <img src={TicTacToeIcon} className='h-14'/>
        </div>
        <span className="text-2xl font-bold mb-4">Jogo da Velha</span>
        <Board board={board} handleClick={handleOnClick}/>
        <ToastContainer
          position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false}
          closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored"
        />
        {isNoWinner ? 
          <span>Sem vencedores</span> : 
          (winner && <span>{winner === "X" ? "Você venceu!!" : "Computador venceu! oh no :("}</span>) 
        }
        <div className="flex flex-row gap-x-4">
          <button 
            className="reset bg-[#473080] mt-10 mb-8 p-2 w-18 rounded hover:shadow-2xl hover:shadow-purple-500" 
            type="button" onClick={resartGame}>Reiniciar
          </button>
          <button 
            className="reset bg-[#473080] mt-10 mb-8 p-2 w-18 rounded hover:shadow-2xl hover:shadow-purple-500" 
            type="button" onClick={back}>Voltar
          </button>
          <button 
            className="reset bg-[#473080] mt-10 mb-8 p-2 w-18 rounded hover:shadow-2xl hover:shadow-purple-500" 
            type="button" onClick={exit}>Abandonar
          </button>
        </div>
      </div>
    </div>
  );
}