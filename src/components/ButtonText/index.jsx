import { Container } from './style'

export function ButtonText({ name, icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={32} />}
      {name}
    </Container>
  )
}
