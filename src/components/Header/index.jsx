import { Container } from './style'

import { Input } from '../../components/Input'
import { Button } from '../Button'
import { ButtonRequest } from '../ButtonRequest'
import { Sidebar } from '../Sidebar'

import { FiMenu, FiSearch } from 'react-icons/fi'
import { GoSignOut } from 'react-icons/go'
import { PiReceiptBold } from 'react-icons/pi'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth'

export function Header({ onChange, ...rest }) {
  const { signOut, user } = useAuth()

  const [sidebar, setSidebar] = useState(false)
  const navigate = useNavigate()

  function navigationHome() {
    return navigate('/')
  }

  function navigationNewDish() {
    return navigate('/new')
  }

  function showSidebar() {
    return setSidebar(!sidebar)
  }

  const isAdmin = user.role === 'admin'

  return (
    <Container $admin={isAdmin} {...rest}>
      <div className="Mobile ">
        <div className="frame">
          <FiMenu onClick={showSidebar} />
          {sidebar && <Sidebar active={setSidebar} />}
        </div>

        {isAdmin ? (
          <div className="logo">
            <img src={logo} alt="logo" />
            <h1 onClick={navigationHome}>Food Explorer</h1>

            <div className="adm">
              <span>admin</span>
            </div>
          </div>
        ) : (
          <div className="logo">
            <img src={logo} alt="logo" />
            <h1 onClick={navigationHome}>Food Explorer</h1>
          </div>
        )}

        {isAdmin ? (
          ''
        ) : (
          <button className="receipt">
            <PiReceiptBold />
            <div className="orderNumbers"> 0 </div>
          </button>
        )}
      </div>

      <div className="Desktop">
        {isAdmin ? (
          <div className="logo">
            <img src={logo} alt="logo" />
            <h1 onClick={navigationHome}>Food Explorer</h1>

            <div className="adm">
              <span>admin</span>
            </div>
          </div>
        ) : (
          <div className="logo">
            <img src={logo} alt="logo" />
            <h1 onClick={navigationHome}>Food Explorer</h1>
          </div>
        )}

        <Input
          id="searchDesktop"
          type="text"
          placeholder="Search for dishes or ingredients"
          icon={FiSearch}
          onChange={onChange}
        />

        {isAdmin ? (
          <Button
            onClick={navigationNewDish}
            className="ButtonNewDish"
            name="New Dish"
          />
        ) : (
          <ButtonRequest />
        )}

        <button type="button" className="exit" onClick={signOut}>
          <GoSignOut />
        </button>
      </div>
    </Container>
  )
}
