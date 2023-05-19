import { Route, BrowserRouter, Routes } from "react-router-dom";
import { App } from "../App";
import { TicTacToeHome } from "../components/tictactoe/tictactoeHome";
import { TicTacToe } from "../components/tictactoe/tictactoe";

export const Router = () => {
   return(
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}  path="/" />
      <Route element={<TicTacToeHome/>} path="/jogo-da-velha" />
      <Route element={<TicTacToe/>} path="/jogo-da-velha/jogar" />
      <Route element={""} path="/pedra-papel-tesoura" />
      <Route element={""} path="/pong" />
    </Routes>
    </BrowserRouter>
   )
}