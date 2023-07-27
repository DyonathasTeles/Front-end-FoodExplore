import { Container } from "./style"

export function Input({ico: Icon, id, ...rest}) {
  return(
    <Container>
      <div className="content">
      {Icon && <label htmlFor={id}> <Icon size={24} /> </label>}
      <input id={id} {...rest} />
      </div>
    </Container>
  )
}