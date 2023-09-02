import { Container, Production } from "./style"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { FiSearch, FiX } from "react-icons/fi"


export function Sidebar({active, admin=false}) {

  function closeMenu(params) {
    return active(false)
  }

  return(
    <Container>
      
      <div className="header">
        <button>
        <FiX onClick={closeMenu}/> 
        </button>
        <h1>Menu </h1>
      </div>

      <Production>
        <main>
          <Input id="searchMobile" type="text" icon={FiSearch} placeholder="Search for dishes or ingredients"  />
          
          {admin && <button>Dish new</button>}
          <button>Leave</button>
        </main>
      </Production>

      <Footer/>

    </Container>
  )
}