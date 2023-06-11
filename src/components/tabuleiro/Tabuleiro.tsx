import { useState } from 'react';
import Linha from './linha'
import { ContainerTabuleiro } from './styles'


function Tabuleiro() {

  return (
      <>
    <ContainerTabuleiro>
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      </ContainerTabuleiro>
      </>
  )
}
export default Tabuleiro

