import { ContainerJogador, Luigi } from './styles'
import Image from 'next/image'

const Jogador2: React.FC = () => {
  return (
    <ContainerJogador>
      <Luigi>
        <Image  src="/images/Luigi.png"  alt="Imagem do Luigi"  className='luigi'  width={70} height={70} />
      </Luigi>
    </ContainerJogador>
  )
}

export default Jogador2
