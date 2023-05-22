import { Helmet } from 'react-helmet';
import Logo from "../../assets/icons/game-console.png";

export const Header = () => {
  return (
    <>
      <Helmet>
        <title>GameDev | Home</title>
        <link rel="icon" href={Logo} className="h-2"/>
      </Helmet>
      <div className="flex flex-row max-sm:flex-wrap max-sm:justify-start gap-x-5 items-center justify-evenly p-4 shadow-2xl bg-[#ffffff0a]">
        <div className="flex flex-row items-center gap-x-2 max-sm:justify-center">
          <img src={Logo} className="h-10"/>
          <span className="text-2xl font-bold">GameDev</span>
        </div>
        <span className="text italic max-sm:w-full w-1/2 justify-center max-sm:mt-2">Seu espaço virtual de lazer</span>
      </div>
    </>
  )
}