import { ContainerJogador, Luigi } from './styles'
import Image from 'next/image'

interface IProps {
  id: string
}

const Jogador2: React.FC<IProps> = ({ id }) => {
  return (
    <ContainerJogador>
      <Luigi>
        <Image
          src="/images/Luigi.png"
          alt="Imagem do Luigi"
          className="luigi"
          width={65}
          height={65}
          id={id}
        />
      </Luigi>
    </ContainerJogador>
  )
}

export default Jogador2
