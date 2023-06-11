import PecaJogador1 from '../jogadores/Jogador1';
import PecaJogador2 from '../jogadores/Jogador2';
import { ContainerLinha } from './styles';
import Subdivisao from './subdivisao';



interface ILinhaProps {
  preta?: boolean;
}

const Linha: React.FC<ILinhaProps> = ({ preta }) => {
  return (
    <ContainerLinha>
      {Array.from({ length: 8 }, (_, index) => (
        <Subdivisao cor={index % 2 === (preta ? 0 : 1)} key={index}>
          {/* Adicione os jogadores nas células correspondentes */}
          {preta && index === 1 && <PecaJogador1 />}
          {!preta && index === 6 && <PecaJogador2 />}
        </Subdivisao>
      ))}
    </ContainerLinha>
  );
};

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
