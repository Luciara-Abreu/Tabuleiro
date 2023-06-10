import styled from 'styled-components'

const Container = styled.div`
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    width: auto;
    height: auto;
    background: blue;
  }
`

const Body = styled.div`
  width: 100%;
  min-height: 96vh;

  display: flex;
  flex-direction: row;
  background: #444;
`

/* -----------------------------------------------------------------------*/

export { Container, Body }
