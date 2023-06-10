import { ContainerLinha } from './styles'
import Subdivisao from './subdivisao'

function Linha(props:any) {
  return (
    <ContainerLinha>
        <Subdivisao cor={props.preta} />
        <Subdivisao cor={!props.preta} />
        <Subdivisao cor={props.preta} />
        <Subdivisao cor={!props.preta} />
        <Subdivisao cor={props.preta} />
        <Subdivisao cor={!props.preta} />
        <Subdivisao cor={props.preta} />
        <Subdivisao cor={!props.preta} />

    </ContainerLinha>
  )
}
export default Linha

