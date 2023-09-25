import { Container, Content } from './style'

export function Textarea({ value, ...rest }) {
  return (
    <Container>
      <Content {...rest} value={value} />
    </Container>
  )
}
