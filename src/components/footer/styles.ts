import styled from 'styled-components'

const ContainerComponentFooter = styled.div`
  display: flex;
  width: 100%;
  height: 4vh;
  margin: 0;
  padding: 0;
  background-color: black;
  color: antiquewhite;
  justify-content: center;
  align-items: center;

  .p-footer {
    font-size: 15px;
  }

  @media (max-width: 767px) {
    display: flex;
    width: 274%;
    height: 5vh;
    margin-top: 0%;
    padding: 0% 8% 0% 8%;

    .p-footer {
      font-size: 10px;
    }
  }
`

export { ContainerComponentFooter }
