import { Container } from "./style"

export function Button({name, loading=false, icon: Icon, dark,...rest}) {
  return (
  <Container type="button" disabled={loading} {...rest} $dark={dark} > 
    {Icon && <Icon size={20} />}
    {name}
  </Container>
  )
}