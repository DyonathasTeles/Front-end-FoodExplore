import { Container } from "./style" 
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import logo from "../../assets/logo.svg" 
import { FiMail, FiLock, FiUser } from "react-icons/fi"

export function SignUp() {
  return (
    <Container>
        <div className="content">

      <div className="logo">
        <img src={logo} alt="logo " />
        <h1>Food Explorer</h1>
      </div>

      <main>
        <h2 className="hide">Login</h2>

        <div className=" inputs">

          <div className="user">
          <p>Your name</p>
          <Input id="user" type="text" placeholder="Example: Dyonathas Teles"   />
          </div>

          <div className="email">
          <p>Email</p>
          <Input id="email" type="email" placeholder="Example: example@example.com.br" />
          </div>

          <div className="password">
          <p>Password</p>
          <Input id="password" type="password"  placeholder="At least 6 characters"   />
          </div>
    
        </div>
        
        <Button name="Sign In" />

        <div className="link">
        <a href="#">I already have an account</a>
        </div>

      </main>

      </div>  
    </Container>
  )
}