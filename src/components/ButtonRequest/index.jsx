import { Container } from './style'

import { PiReceiptBold } from 'react-icons/pi'

export function ButtonRequest({ ...rest }) {
  return (
    <Container {...rest}>
      <PiReceiptBold />
      <p>Orders (0)</p>
    </Container>
  )
}
