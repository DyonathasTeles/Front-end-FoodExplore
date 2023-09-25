import { PiUploadSimple } from 'react-icons/pi'
import { Container } from './style'

export function InputImg({ id, ...rest }) {
  return (
    <Container>
      <div className="content">
        <label htmlFor={id}>
          <PiUploadSimple />
          <h1>Select image</h1>
          <input type="file" id={id} {...rest} />
        </label>
      </div>
    </Container>
  )
}
