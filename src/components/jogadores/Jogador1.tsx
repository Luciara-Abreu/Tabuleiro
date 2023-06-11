import { ContainerJogador, Mario } from './styles'
import Image from 'next/image'

interface IProps {
  id: string;
}

const Jogador1: React.FC<IProps> = ({ id }) => {
  return (
    <ContainerJogador>
      <Mario>
        <Image src="/images/Mario.png" className="mario" alt="Mario" width={60} height={60} id={id} />
      </Mario>
    </ContainerJogador>
  )
}

export default Jogador1
