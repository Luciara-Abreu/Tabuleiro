import React, { useState } from 'react'
import PecaJogador1 from '../jogadores/Jogador1'
import PecaJogador2 from '../jogadores/Jogador2'
import { ContainerLinha } from './styles'
import Subdivisao from './subdivisao'

interface ILinhaProps {
  preta?: boolean
}

const Linha: React.FC<ILinhaProps> = ({ preta }) => {
  const [jogadores, setJogadores] = useState<
    { id: string; casaId: string | null }[]
  >([
    { id: 'jogador1', casaId: null },
    { id: 'jogador2', casaId: null }
  ])

  const handleCasaClick = (casaId: string) => {
    const jogadorSelecionado = jogadores.find(
      jogador => jogador.casaId === casaId
    )

    if (jogadorSelecionado) {
      // Desselecionar o jogador
      setJogadores(prevJogadores =>
        prevJogadores.map(jogador =>
          jogador.id === jogadorSelecionado.id
            ? { ...jogador, casaId: null }
            : jogador
        )
      )
    } else {
      // Selecionar o jogador
      const jogadorDisponivel = jogadores.find(
        jogador => jogador.casaId === null
      )

      if (jogadorDisponivel) {
        setJogadores(prevJogadores =>
          prevJogadores.map(jogador =>
            jogador.id === jogadorDisponivel.id
              ? { ...jogador, casaId }
              : jogador
          )
        )
      }
    }
  }

  return (
    <ContainerLinha>
      {Array.from({ length: 8 }, (_, index) => {
        const cor = index % 2 === (preta ? 0 : 1)
        const casaId = `casa${index}`
        const jogador = jogadores.find(jogador => jogador.casaId === casaId)

        let jogador1Cells = false
        let jogador2Cells = false

        if (preta && [0, 2].includes(index)) {
          jogador1Cells = true
        }
        if (!preta && [1].includes(index)) {
          jogador1Cells = true
        }
        if (!preta && [5, 7].includes(index)) {
          jogador2Cells = true
        }
        if (preta && [6].includes(index)) {
          jogador2Cells = true
        }

        return (
          <Subdivisao
            cor={cor}
            key={index}
            onClick={() => handleCasaClick(casaId)}
          >
            {jogador1Cells && <PecaJogador1 id="jogador1" />}
            {jogador2Cells && <PecaJogador2 id="jogador2" />}
            {jogador && jogador.id === 'jogador1' && (
              <PecaJogador1 id={jogador.id} />
            )}
            {jogador && jogador.id === 'jogador2' && (
              <PecaJogador2 id={jogador.id} />
            )}
          </Subdivisao>
        )
      })}
    </ContainerLinha>
  )
}

export default Linha


/**
 * import React from 'react'
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


        if (!preta && index == 5) {
          jogador2Cells = true
        }
        if (preta && index == 6) {
          jogador2Cells = true
        }

        if (!preta && index == 7) {
          jogador2Cells = true
        }

        return (
          <Subdivisao cor={cor} key={index}>
            {jogador1Cells && <PecaJogador1 />}
            {jogador2Cells && <PecaJogador2 />}
          </Subdivisao>
        )
      })}
    </ContainerLinha>
  )
}

export default Linha
 */