import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Container, Content } from './style'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const { signIn } = useAuth()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  function handleSignIn() {
    signIn({ email, password })
  }

  function navigation() {
    return navigate('/register')
  }

  return (
    <Container>
      <Content>
        <div className="logo">
          <img src={logo} alt="logo " />
          <h1>Food Explorer</h1>
        </div>

        <main>
          <h2 className="hide">Login</h2>

          <div className=" inputs">
            <div className="email">
              <p>Email</p>
              <Input
                id="email"
                type="email"
                placeholder="Example: example@example.com.br"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="password">
              <p>Password</p>
              <Input
                type="password"
                id="password"
                placeholder="At least 6 characters"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <Button name="Sign In" onClick={handleSignIn} />

          <div className="linkRegister">
            <ButtonText name="Create an account" onClick={navigation} />
          </div>
        </main>
      </Content>
    </Container>
  )
}
