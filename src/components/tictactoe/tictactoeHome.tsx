import { Helmet } from 'react-helmet';
import TicTacToeIcon from '../../assets/icons/tic-tac-toe.png';
import { Sidebar } from '../sidebar/sidebar';
import { useNavigate } from 'react-router-dom';

export const TicTacToeHome = () => {
  const navigate = useNavigate();
  
  const goPlay = () => navigate('/jogo-da-velha/jogar');
  return (
    <>
      <Helmet>
        <title>GameDev | Jogo da velha</title>
      </Helmet>
      <div className="h-full w-full bg-[#0f172a] text-[#FFFFFF]">
        <Sidebar/>
        <div className="flex flex-col items-center pb-4">
          <div className='bg-[#473080] rounded-full p-2 flex justify-center items-center h-20 w-20 mb-2 mt-4'>
            <img src={TicTacToeIcon} className='h-14'/>
          </div>
          <span className="text-2xl font-bold mb-4">Jogo da Velha</span>
          <div className="flex flex-col w-[28rem] border p-4 divide-y gap-y-6 divide-[#473080] rounded-md border-[#473080]">
            <div className="flex flex-col">
              <span className="font-semibold italic">O que é?</span>
              <span className="pl-4 pt-1">
                O jogo da velha é um jogo de tabuleiro onde dois jogadores tentam formar 
                uma linha reta com suas peças (X ou O) em um tabuleiro 3x3. O objetivo é vencer 
                ao completar uma linha antes do oponente. É simples e popular em todo o mundo.
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold italic mt-2">Como jogar?</span>
              <span className="pl-4 pt-1 flex flex-col">
                <span>- Escolha uma marcação (X ou O) para cada jogador.</span>
                <span>- Alternem as jogadas, colocando suas marcações em espaços vazios.</span>
                <span>- Ganhe formando uma linha reta com suas marcações: horizontal, vertical ou diagonal. </span>
                <span className="mt-4">Obs: Dá empate se o tabuleiro estiver cheio sem vencedor.</span>
              </span>
            </div>
          </div>
          <button 
            className="bg-[#473080] mt-2 mb-8 p-2 w-16 rounded hover:shadow-2xl hover:shadow-purple-500"
            onClick={goPlay}
          >
            Jogar
          </button>
        </div>
      </div>
    </>
  )
}