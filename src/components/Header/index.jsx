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

export function Header({ admin = false, ...rest }) {
  const [sidebar, setSidebar] = useState(false)
  const navigate = useNavigate()

  function navigationHome() {
    return navigate('/')
  }

  function showSidebar() {
    return setSidebar(!sidebar)
  }

  return (
    <Container $admin={admin} {...rest}>
      <div className="Mobile ">
        <div className="frame">
          <FiMenu onClick={showSidebar} />
          {sidebar && <Sidebar active={setSidebar} />}
        </div>

        {admin ? (
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

        {admin ? (
          ''
        ) : (
          <button className="receipt">
            <PiReceiptBold />
            <div className="orderNumbers"> 12 </div>
          </button>
        )}
      </div>

      <div className="Desktop">
        {admin ? (
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
        />

        {admin ? (
          <Button className="ButtonNewDish" name="New Dish" />
        ) : (
          <ButtonRequest />
        )}

        <button type="button" className="exit">
          <GoSignOut />
        </button>
      </div>
    </Container>
  )
}
