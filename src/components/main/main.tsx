import TicTacToe from '../../assets/icons/tic-tac-toe.png';
import Pong from '../../assets/icons/table-tennis.png';
import RockPaperScissors from '../../assets/icons/rock-paper-scissors.png';
import { useNavigate } from 'react-router-dom';

const GameOption = ({icon, name, router}: any) => {
  return (
    <div className="flex flex-col w-56 h-52 items-center hover:scale-110 cursor-pointer" onClick={router}>
      <div className="bg-[#473080] rounded-full p-2 flex justify-center items-center mb-2 h-24 w-24">
        <img src={icon} className='h-16'/>
      </div>
      <span>{name}</span>
    </div>
  );
}

export const Main = () => {
  const navigate = useNavigate();
  
  const goToTicTacToe = () => {
    navigate('/jogo-da-velha');
  }

  return (
    <div className="flex justify-center flex-col items-center mt-[8rem] flex-wrap">
      <span className="text-2xl font-semibold">Escolha um jogo para se divertir!</span>
      <div className="flex flex-row gap-x-12 mt-8">
        <GameOption icon={TicTacToe} name={"Jogo da Velha"} router={goToTicTacToe}/>
        <GameOption icon={RockPaperScissors} name={"Pedra, Papel e Tersoura"}/>
        <GameOption icon={Pong} name={"Pong"}/>
      </div>
    </div>
  )
}