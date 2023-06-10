import styled from 'styled-components'

const Container = styled.div`
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`

const Body = styled.div`
  width: 100%;
  min-height: 96vh;

  display: flex;
  flex-direction: row;
  background: #444;

  @media (max-width: 768px) {
    width: 290%;
    min-height: 284vh;

    display: flex;
    justify-content: center;
    align-items: center;
    background: #444;
  }
`

/* -----------------------------------------------------------------------*/

export { Container, Body }
