import styled from 'styled-components'

const ContainerGame = styled.div`
  width: 100%;
  min-height: auto;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    margin: 0;
    padding-bottom: 0px;
    color: white;
  }

  @media (max-width: 768px) {
    width: auto;
    min-height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const Pontuacao = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items:center;

.pontuadao-mario {
margin-left: 20%;
}

.pontuadao-luigi{
margin-right: 20%;
}
`


export { ContainerGame,Pontuacao }
