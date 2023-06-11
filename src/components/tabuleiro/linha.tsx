import React, { useState } from 'react'
import Jogador1 from '../jogadores/Jogador1'
import Jogador2 from '../jogadores/Jogador2'
import { ContainerLinha } from './styles'
import Subdivisao from './subdivisao'

interface ILinhaProps {
  preta?: boolean
}

const Linha: React.FC<ILinhaProps> = ({ preta }) => {
  const [jogadores, setJogadores] = useState<{
    [key: string]: { id: string; casaId: string | null }
  }>({
    jogador1: { id: 'jogador1', casaId: preta ? 'casa0' : null },
    jogador2: { id: 'jogador2', casaId: preta ? null : 'casa1' }
  })

  const handleDragStart = (
    event: React.DragEvent<HTMLImageElement>,
    jogadorId: string
  ) => {
    event.dataTransfer.setData('jogadorId', jogadorId)
  }

  const handleDragEnd = (jogadorId: string) => {
    setJogadores(prevJogadores => {
      const jogadorAtualizado = {
        ...prevJogadores[jogadorId],
        casaId: null
      }

      return {
        ...prevJogadores,
        [jogadorId]: jogadorAtualizado
      }
    })
  }

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    casaId: string
  ) => {
    const jogadorId = event.dataTransfer.getData('jogadorId')

    if (jogadorId) {
      setJogadores(prevJogadores => {
        const jogadorAtualizado = {
          ...prevJogadores[jogadorId],
          casaId
        }

        return {
          ...prevJogadores,
          [jogadorId]: jogadorAtualizado
        }
      })
    }
  }

  return (
    <ContainerLinha>
      {Array.from({ length: 8 }, (_, index) => {
        const cor = index % 2 === (preta ? 0 : 1)
        const casaId = `casa${index}`

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

        const jogador = jogador1Cells
          ? jogadores.jogador1
          : jogador2Cells
          ? jogadores.jogador2
          : null

        return (
          <Subdivisao
            cor={cor}
            key={index}
            onDragOver={event => event.preventDefault()}
            onDrop={event => handleDrop(event, casaId)}
          >
            {jogador && (
              <>
                {jogador1Cells && (
                  <Jogador1
                    id={jogador.id}
                    draggable={jogador.casaId === null}
                    onDragStart={(event: React.DragEvent<HTMLImageElement>) =>
                      handleDragStart(event, jogador.id)
                    }
                    onDragEnd={() => handleDragEnd(jogador.id)}
                  />
                )}
                {jogador2Cells && (
                  <Jogador2
                    id={jogador.id}
                    draggable={jogador.casaId === null}
                    onDragStart={(event: React.DragEvent<HTMLImageElement>) =>
                      handleDragStart(event, jogador.id)
                    }
                    onDragEnd={() => handleDragEnd(jogador.id)}
                  />
                )}
              </>
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

/**
 *
interface ILinhaProps {
  preta?: boolean;
  corJogador1: string;
}

const Linha: React.FC<ILinhaProps> = ({ preta, corJogador1 }) => {
  const [jogadores, setJogadores] = useState<{
    jogador1: { id: string; cor: string; casaId: string | null };
  }>({
    jogador1: { id: 'jogador1', cor: 'red', casaId: null },
  });

  const handleDragStart = (event: React.DragEvent<HTMLImageElement>, jogadorId: string) => {
    event.dataTransfer.setData('jogadorId', jogadorId);
  };

  const handleDragEnd = (jogadorId: string) => {
    setJogadores((prevJogadores) => {
      const jogadorAtualizado = {
        ...prevJogadores.jogador1,
        casaId: null,
      };

      return {
        jogador1: jogadorAtualizado,
      };
    });
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, casaId: string) => {
    const jogadorId = event.dataTransfer.getData('jogadorId');

    if (jogadorId) {
      setJogadores((prevJogadores) => {
        const jogadorAtualizado = {
          ...prevJogadores.jogador1,
          casaId,
        };

        return {
          jogador1: jogadorAtualizado,
        };
      });
    }
  };

  return (
    <ContainerLinha>
      {Array.from({ length: 8 }, (_, index) => {
        const cor = index % 2 === (preta ? 0 : 1);
        const casaId = `casa${index}`;
        const jogador1Cells = preta && [0, 2].includes(index);
        const jogador = jogador1Cells ? jogadores.jogador1 : null;

        return (
          <Subdivisao
            cor={cor}
            key={index}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => handleDrop(event, casaId)}
          >
            {jogador && (
              <PecaJogador1
                id={jogador.id}
                cor={corJogador1}
                draggable={jogador.casaId === null}
                onDragStart={(event: React.DragEvent<HTMLImageElement>) => handleDragStart(event, jogador.id)}
                onDragEnd={() => handleDragEnd(jogador.id)}
              />
            )}
          </Subdivisao>
        );
      })}
    </ContainerLinha>
  );
};

export default Linha;
 */
