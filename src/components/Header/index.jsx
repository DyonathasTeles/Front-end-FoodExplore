import { Container } from "./style";
import receipt from "../../assets/receipt.svg"
import frame from "../../assets/frame.svg"
import logo from "../../assets/logo.svg" 

export function Header({admin=true, ...rest}) {
  return (
    <Container>

      <button className="frame">
          <img src={frame} alt="frame" />
      </button>

      
        { admin ?  
        
        <div className="logo">
         <img src={logo} alt="logo" />
         <h1>Food Explorer</h1>

         <div className="adm">
          <span>admin</span>

         </div>

         </div> : 
      
         <div className="logo">

         <img src={logo} alt="logo" />
         <h1>Food Explorer</h1>
         </div>
         }

        { admin ? '' :  <button className="receipt"> <img src={receipt} alt="receipt" /> </button>}

    </Container>
  )
}