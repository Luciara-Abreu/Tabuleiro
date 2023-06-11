import { ContainerJogador, Mario } from './styles'
import Image from 'next/image'

interface IProps {
  id: string;
  draggable?: boolean;
  onDragStart?: (event: React.DragEvent<HTMLImageElement>) => void;
  onDragEnd?: () => void;
}

const Jogador1: React.FC<IProps> = ({ id, draggable, onDragStart, onDragEnd }) => {
  return (
    <ContainerJogador>
      <Mario>
        <Image src="/images/Mario.png" className="mario" alt="Mario" width={60} height={60} id={id} draggable={draggable} onDragStart={onDragStart} onDragEnd={onDragEnd} />
      </Mario>
    </ContainerJogador>
  )
}

export default Jogador1
