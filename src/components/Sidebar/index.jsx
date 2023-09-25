import { FiSearch, FiX } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import { Container, Production } from './style'

export function Sidebar({ active }) {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  function closeMenu() {
    return active(false)
  }

  function handleNavigateNewDish() {
    navigate('/new')
  }

  return (
    <Container>
      <div className="header">
        <button>
          <FiX onClick={closeMenu} />
        </button>
        <h1>Menu </h1>
      </div>

      <Production>
        <main>
          <Input
            id="searchMobile"
            type="text"
            icon={FiSearch}
            placeholder="Search for dishes or ingredients"
          />

          {user.role === 'admin' && (
            <button type="button" onClick={handleNavigateNewDish}>
              Dish new
            </button>
          )}
          <button type="button" onClick={signOut}>
            Exit
          </button>
        </main>
      </Production>

      <Footer />
    </Container>
  )
}
