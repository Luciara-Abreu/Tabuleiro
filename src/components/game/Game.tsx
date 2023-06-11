import Tabuleiro from "../tabuleiro/Tabuleiro";
import { ContainerGame } from "./styles";

const Game = () => {
  return (
    <ContainerGame>
      <h1 className="title">Bem-vindo ao Jogo de Damas!</h1>
      {/* Adicione aqui o código do tabuleiro e das peças */}
      <Tabuleiro />
    </ContainerGame>
  );
};

export default Game