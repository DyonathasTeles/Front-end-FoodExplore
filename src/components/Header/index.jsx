import { Container } from "./style";
import receipt from "../../assets/receipt.svg"
import frame from "../../assets/frame.svg"
import logo from "../../assets/logo.svg" 

export function Header() {
  return (
    <Container>

      <button className="frame">
          <img src={frame} alt="frame" />
      </button>

      <div className="logo">
         <img src={logo} alt="logo" />
         <h1>Food Explorer</h1>
      </div>

      <button className="receipt"> <img src={receipt} alt="receipt" /> </button>

    </Container>
  )
}