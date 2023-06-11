import { ContainerJogador, Mario } from './styles'
import Image from 'next/image'

const Jogador1: React.FC = () => {
  return (
    <ContainerJogador>
      <Mario>
        <Image src="/images/Mario.png" className="mario" alt="Mario" width={60} height={60} />
      </Mario>
    </ContainerJogador>
  )
}

export default Jogador1
