import { Container } from "./style"
import {PiUploadSimple} from "react-icons/pi"

export function InputImg({ id, adm, ...rest}) {
  
  return (
    <Container>
      <div className="content">
      <label htmlFor={id}>
        <PiUploadSimple/>
        <h1>Select image</h1>
        <input type="file" id={id} {...rest} />
      </label>
      </div>
    </Container>
  )
}