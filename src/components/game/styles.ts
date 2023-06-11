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
    padding-bottom: 20px;
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

export { ContainerGame }
