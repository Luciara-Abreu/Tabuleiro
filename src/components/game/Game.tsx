import Tabuleiro from '../tabuleiro/Tabuleiro'
import { ContainerGame, Pontuacao } from './styles'
import Jogador1 from '@/components/jogadores/Jogador1'
import Jogador2 from '@/components/jogadores/Jogador2'

const Game = () => {
  return (
    <ContainerGame>
      <h1 className="title">Bem-vindo ao Jogo Mario Damas!</h1>
      <Pontuacao>
        <div className="pontuadao-mario">
          <Jogador1 /> Pontos:{' '}
          </div>

        <div className="pontuadao-luigi">
          <Jogador2 /> Pontos:{' '}
        </div>
      </Pontuacao>
      <Tabuleiro />
    </ContainerGame>
  )
}

export default Game
