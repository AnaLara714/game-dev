import './App.css'
import { Header } from './components/header/header'
import { Main } from './components/main/main'

export const App = () => {

  return (
    <div className='h-screen w-full bg-[#0f172a] text-[#FFFFFF]'>
      <Header/>
      <Main/>
    </div>
  )
}
