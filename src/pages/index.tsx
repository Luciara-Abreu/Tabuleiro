import Footer from '@/components/footer/Footer'
import { Body, Container } from '@/styles/styles'
import Tabuleiro from '@/components/tabuleiro/Tabuleiro'
import Game from '@/components/game/Game'

export default function Home() {
  return (
    <Container>
      <Body style={{margin: 0, padding:0 }}>     
        <Game />
      </Body>
      <Footer />
    </Container>
  )
}
