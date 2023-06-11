import styled from 'styled-components'

const ContainerJogador = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9% 0 5% 0;

  @media (max-width: 767px) {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
    padding: 0;
  }
`

const Mario = styled.div`
  width: auto;
  .mario {
    border-radius: 50px;
  }
`

const Luigi = styled.div`
  width: auto;
  .luigi {
    border-radius: 50px;
    background: black;
  }
`

export { ContainerJogador, Mario, Luigi }
