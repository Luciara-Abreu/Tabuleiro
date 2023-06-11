import React from 'react'
import PecaJogador1 from '../jogadores/Jogador1'
import PecaJogador2 from '../jogadores/Jogador2'
import { ContainerLinha } from './styles'
import Subdivisao from './subdivisao'

interface ILinhaProps {
  preta?: boolean
}

const Linha: React.FC<ILinhaProps> = ({ preta }) => {
  return (
    <ContainerLinha>
      {Array.from({ length: 8 }, (_, index) => {
        const cor = index % 2 === (preta ? 0 : 1)

        let jogador1Cells = false
        let jogador2Cells = false

        if (preta && index == 0) {
          jogador1Cells = true
        }
        if (!preta && index == 1) {
          jogador1Cells = true
        }

        if (preta && index == 2) {
          jogador1Cells = true
        }

        if (preta && index == 5) {
          jogador2Cells = true
        }
        if (!preta && index == 6) {
          jogador2Cells = true
        }

        if (preta && index == 7) {
          jogador2Cells = true
        }

        return (
          <Subdivisao cor={cor} key={index}>
            {/* Adicione os jogadores apenas nas células pretas */}
            {jogador1Cells && <PecaJogador1 />}
            {jogador2Cells && <PecaJogador2 />}
          </Subdivisao>
        )
      })}
    </ContainerLinha>
  )
}

export default Linha

/**
function Linha(props: any) {
  return (
    <ContainerLinha>
      {Array.from({ length: 8 }, (_, index) => (
        <Subdivisao cor={index % 2 === (props.preta ? 0 : 1)} key={index} />
      ))}
    </ContainerLinha>
  )
}
export default Linha

 */
