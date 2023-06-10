import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const ContainerTabuleiro = styled.div`
  width: 100%;
  min-height: 96vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: auto;
    min-height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

interface IProps extends HTMLAttributes<HTMLDivElement> {
  cor?: boolean
}
const ContainerSubdivisao = styled.div<IProps>`
  width: 100px;
  height: 100px;
  background-color: ${props => (props.cor ? '#000' : '#fff')};

  @media (max-width: 768px) {
    width: 100px;
    min-height: 100px;
    background-color: ${props => (props.cor ? '#000' : '#fff')};
  }
`

const ContainerLinha = styled.div`
  display: flex;
`

export { ContainerTabuleiro, ContainerSubdivisao, ContainerLinha }
