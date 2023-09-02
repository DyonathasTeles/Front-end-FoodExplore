import { Container } from "./style";
import minus from "../../assets/minus.svg"
import plus from "../../assets/plus.svg"
import { useState } from "react";

export function Amount() {
  const [value, setValue] = useState("01")

  function handleAdd() {

      let sum = (Number(value)) + 1

      let valueSum = String(sum).padStart(2,"0")

    setValue(valueSum)
  }

  function handleRemove() {
    let valueSub

    if (value > 1) {
      let sub = (Number(value)) - 1
      valueSub = String(sub).padStart(2,"0")
    }else{
      return
    }
    setValue(valueSub)
  }
  
  return (
    <Container> 
      
      <button type="button" className="minus" onClick={handleRemove}>
      <img src={minus} alt="" />
      </button>

          <h1>{value}</h1>

      <button type="button" className="plus" onClick={handleAdd}>
      <img src={plus} alt="" />
      </button>

    </Container>

  )
}