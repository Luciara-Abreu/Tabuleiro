import { ContainerSubdivisao } from './styles';

interface IProps {
  cor: boolean;
  children?: React.ReactNode;
}

const Subdivisao: React.FC<IProps> = ({ cor, children }) => {
  return <ContainerSubdivisao cor={cor}>
    {children}
  </ContainerSubdivisao>;
};

export default Subdivisao;


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