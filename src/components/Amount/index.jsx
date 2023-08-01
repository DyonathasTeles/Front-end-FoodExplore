import { Container } from "./style";
import minus from "../../assets/minus.svg"
import plus from "../../assets/plus.svg"
import { useState } from "react";

export function Amount() {
  const [value, setValue] = useState("01")
  
  return (
    <Container> 
      
      <button className="minus">
      <img src={minus} alt="" />
      </button>

          <h1>01</h1>

      <button className="plus">
      <img src={plus} alt="" />
      </button>

    </Container>

  )
}