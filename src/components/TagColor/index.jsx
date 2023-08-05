import { Container } from "./style";
import { FiPlus, FiX } from "react-icons/fi" 

export function TagColor({ isNew, value, onClick, ...rest}) {
  return (
  <Container $isNew={isNew}>
    <div className="content">

    <input type="text" value={value} readOnly={!isNew} {...rest}  />

    <button type="button" onClick={onClick} >{ isNew ? <FiPlus/> : <FiX/> }</button>
    </div>
  </Container>
  )
}