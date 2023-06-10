import { ContainerSubdivisao } from './styles'

interface IProps {
  cor: boolean
}

const Subdivisao: React.FC<IProps> = ({ cor }) => {
  return (
    <div>
      <ContainerSubdivisao cor={cor} />
    </div>
  )
}
export default Subdivisao
