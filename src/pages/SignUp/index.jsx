import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Content } from './style'

import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { ButtonText } from '../../components/ButtonText'

export function SignUp() {
  const navigate = useNavigate()
  function navigationLogin() {
    return navigate(-1)
  }
  return (
    <Container>
      <Content>
        <div className="logo">
          <img src={logo} alt="logo " />
          <h1>Food Explorer</h1>
        </div>

        <main>
          <h2 className="hide">Create your account</h2>

          <div className=" inputs">
            <div className="user">
              <p>Your name</p>
              <Input
                id="user"
                type="text"
                placeholder="Example: Dyonathas Teles"
              />
            </div>

            <div className="email">
              <p>Email</p>
              <Input
                id="email"
                type="email"
                placeholder="Example: example@example.com.br"
              />
            </div>

            <div className="password">
              <p>Password</p>
              <Input
                id="password"
                type="password"
                placeholder="At least 6 characters"
              />
            </div>
          </div>

          <Button name="Sign In" />

          <div className="return">
            <ButtonText
              name="I already have an account"
              onClick={navigationLogin}
            />
          </div>
        </main>
      </Content>
    </Container>
  )
}
