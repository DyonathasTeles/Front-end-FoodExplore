import { Container } from "./style"

import { PiReceiptBold } from "react-icons/pi"

export function ButtonRequest({name, icon: Icon, ...rest}) {
  
  return (
    <Container>
      <PiReceiptBold/>
      <p>Requests (0)</p>
    </Container>
  )
}