import Linha from './linha'
import { ContainerTabuleiro } from './styles'

function Tabuleiro() {
  return (
    <ContainerTabuleiro>
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
    </ContainerTabuleiro>
  )
}
export default Tabuleiro
