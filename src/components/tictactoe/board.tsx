
interface BoardProps {
  board: Array<Array<string | null>>;
  handleClick: (row: number, col: number) => void;
}

export const Board = ({ board, handleClick }: BoardProps) => {
  return (
    <div className="board flex justify-center items-center flex-col gap-2">
      {board.map((row: any, rowIndex: any) => (
        <div key={rowIndex} className="board_row flex gap-2">
          {row.map((cell: any, cellIndex: any) => (
            <button 
              key={cellIndex} 
              className="cell bg-[#f2f2f2] text-black w-24 h-24 rounded text-5xl items-center font-bold" 
              onClick={() => handleClick(rowIndex, cellIndex)}
            >
              {cell}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}