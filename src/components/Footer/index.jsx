import logoGray from '../../assets/logo-gray.svg'
import { Container } from './style'
export function Footer() {
  return (
    <Container>
      <div className="logo">
        <img src={logoGray} alt="logo gray" />

        <h1>Food Explorer</h1>
      </div>

      <div className="rights">
        <p>© 2023 - All rights reserved.</p>
      </div>
    </Container>
  )
}
