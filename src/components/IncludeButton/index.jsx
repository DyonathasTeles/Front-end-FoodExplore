import { Container } from "./style"

export function IncludeButton({name, loading=false, icon: Icon, ...rest}) {
  return (
  <Container type="button" disabled={loading} {...rest} > 
    {Icon && <Icon size={20} />}
    {name}
  </Container>
  )
}