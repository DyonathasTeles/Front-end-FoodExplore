import {Container} from "./style"

export function Button({name, ...rest}) {
  return (
    <Container type="button" {...rest}>
      {name}
    </Container>
  )
}