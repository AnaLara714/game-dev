import { useNavigate } from 'react-router-dom';
import TicTacToe from '../../assets/icons/tic-tac-toe.png';
import Pong from '../../assets/icons/table-tennis.png';
import RockPaperScissors from '../../assets/icons/rock-paper-scissors.png';
import Logo from "../../assets/icons/game-console.png";

const Button = ({icon, name, router}: any) => {
  return (
    <button className='hover:bg-[#473080] p-2 rounded flex flex-col items-center gap-y-1' onClick={router}>
      <img src={icon} className='h-8' />
      <span className='text-center text-xs'>{name}</span>
    </button>
  )
}

export const Sidebar = () => {
  const navigate = useNavigate();
  
  const goHome = () => navigate('/');
  const goToTicTacToe = () => navigate('/jogo-da-velha');

  return (
    <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[80px] 
      overflow-y-auto text-center bg-slate-800 flex flex-col items-center justify-center gap-y-4">
      <Button icon={Logo} router={goHome} name="Home"/>
      <Button icon={TicTacToe} router={goToTicTacToe} name="Jogo da velha"/>
      <Button icon={RockPaperScissors} name="Pedra, papel e tesoura"/>
      <Button icon={Pong} name="Pong"/>
    </div>
  )
}