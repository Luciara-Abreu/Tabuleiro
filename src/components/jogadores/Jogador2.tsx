import { ContainerJogador, Luigi } from './styles'
import Image from 'next/image'

interface IProps {
  id: string;
  draggable?: boolean;
  onDragStart?: (event: React.DragEvent<HTMLImageElement>) => void;
  onDragEnd?: () => void;
}

const Jogador2: React.FC<IProps> = ({ id, draggable, onDragStart, onDragEnd }) => {
  return (
    <ContainerJogador>
      <Luigi>
        <Image src="/images/Luigi.png" alt="Imagem do Luigi" className="luigi"   width={65} height={65}  id={id} draggable={draggable} onDragStart={onDragStart} onDragEnd={onDragEnd} />
      </Luigi>
    </ContainerJogador>
  )
}

export default Jogador2
