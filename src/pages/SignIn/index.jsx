import { Container, Content } from "./style" 
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import logo from "../../assets/logo.svg" 

export function SignIn() {
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
          <Input id="email" type="email" placeholder="Example: example@example.com.br" />
          </div>

          <div className="password">
          <p>Password</p>
          <Input  type="password" id="password" placeholder="At least 6 characters" />
          </div>
    
        </div>
        
        <Button name="Sign In"/>

        <div className="return">
        <ButtonText name="I already have an account" />
        </div>

      </main>

      </Content>  
    </Container>
  )
}