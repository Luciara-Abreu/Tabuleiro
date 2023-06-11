import { ContainerSubdivisao } from './styles'

interface IProps {
  cor: boolean
  children?: React.ReactNode
  onClick?: () => void
  onDragOver?: (event: React.DragEvent<HTMLDivElement>) => void
  onDrop?: (event: React.DragEvent<HTMLDivElement>) => void
}

const Subdivisao: React.FC<IProps> = ({
  cor,
  children,
  onClick,
  onDragOver,
  onDrop
}) => {
  return (
    <ContainerSubdivisao
      cor={cor}
      onClick={onClick}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
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
