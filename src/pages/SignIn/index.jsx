import { Container } from "./style" 
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import logo from "../../assets/logo.svg" 
import { FiMail, FiLock } from "react-icons/fi"

export function SignIn() {
  return (
    <Container>
        <div className="content">

      <div className="logo">
        <img src={logo} alt="logo " />
        <h1>Food Explore</h1>
      </div>

      <main>
        <h2 className="hide">Login</h2>

        <div className=" inputs">

          <div className="email">
          <p>Email</p>
          <Input id="1" type="password" placeholder="Example: example@example.com.br" ico={FiMail}/>
          </div>

          <div className="password">
          <p>Password</p>
          <Input type="text" id="password" placeholder="At least 6 characters" ico={FiLock}  />
          </div>
    
        </div>
        
        <Button name="Sign In" />

        <div className="link">
        <a href="#">Create an account</a>
        </div>

      </main>

      </div>  
    </Container>
  )
}