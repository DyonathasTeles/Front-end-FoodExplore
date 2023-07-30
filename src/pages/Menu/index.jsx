import { Container, Production } from "./style"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiSearch, FiX } from "react-icons/fi"

export function Menu() {
  return (
    <Container>

      <div className="header">

        <h1> <FiX/> Menu </h1>

      </div>

      <Production>
        <main>
          <Input id="search" type="text" icon={FiSearch} placeholder="Search for dishes or ingredients"  />

          <button>Leave</button>
        </main>
      </Production>

      <Footer/>

    </Container>
  )
}