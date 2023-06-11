import { ContainerSubdivisao } from './styles'

interface IProps {
  cor: boolean
  children?: React.ReactNode
  onClick?: () => void
}

const Subdivisao: React.FC<IProps> = ({ cor, children, onClick }) => {
  return (
    <ContainerSubdivisao cor={cor} onClick={onClick}>
      {children}
    </ContainerSubdivisao>
  )
}

export default Subdivisao

/*
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

*/
