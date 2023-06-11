import { useState } from 'react';
import { Luigi, Mario } from '../jogadores/styles';
import Linha from './linha'
import { ContainerTabuleiro } from './styles'
import Jogador1 from '../jogadores/Jogador1';
import Jogador2 from '../jogadores/Jogador2';

function Tabuleiro() {
  const [casaSelecionada, setCasaSelecionada] = useState<string | null>(null);
  const [pecaSelecionada, setPecaSelecionada] = useState<string | null>(null);

  const handleCasaClick = (id: string) => {
    if (casaSelecionada) {
      document.getElementById(casaSelecionada)?.classList.remove('casa_selecionada');
    }

    setCasaSelecionada(id);
    document.getElementById(id)?.classList.add('casa_selecionada');

    const peca = document.getElementById(id)?.querySelector('img:first-child');
    setPecaSelecionada(peca?.id || 'NENHUMA PECA SELECIONADA');
  };
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

      <div id="info_casa_selecionada">{casaSelecionada}</div>
      <div id="info_peca_selecionada">{pecaSelecionada}</div>
      </>
  )
}
export default Tabuleiro

