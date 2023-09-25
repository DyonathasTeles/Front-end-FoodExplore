import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Content } from './style'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { ButtonText } from '../../components/ButtonText'
import { api } from '../../services/api'

export function SignUp() {
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Fill in all fields')
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('user successfully registered')
        navigate(-1)
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Unable to create a user')
        }
      })
  }

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
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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
                id="password"
                type="password"
                placeholder="At least 6 characters"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <Button name="Sign Up" onClick={handleSignUp} />

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
