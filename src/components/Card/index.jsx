import { Amount } from '../Amount'
import { Button } from '../Button'
import { Container, Content, Heart } from './style'

import { BsPencil } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import img from '../../assets/Maskgroup.png'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Card({ data, admin = false, ...rest }) {
  const [like, setLike] = useState(false)
  const navigate = useNavigate()

  function navigationDishPreview() {
    return navigate(`/dish/1`)
  }

  function navigationToEditDish() {
    return navigate(`/edit/1`)
  }

  function handleMenuOpen() {
    setLike(!like)
  }

  return (
    <Container>
      <Content {...rest}>
        {admin ? (
          <BsPencil onClick={navigationToEditDish} className="pencil" />
        ) : (
          <Heart>
            <input type="checkbox" onChange={handleMenuOpen} />
            <div className="checkmark">
              <FiHeart />
            </div>
          </Heart>
        )}

        <img onClick={navigationDishPreview} src={img} alt="" />

        <div className="cardTexts">
          <h2 onClick={navigationDishPreview}> Ravanello Salad </h2>

          <p onClick={navigationDishPreview}>uma salada cheia de guloseimas</p>

          <span>R$ 49,97 </span>
        </div>

        {admin ? (
          <></>
        ) : (
          <div className="quantityAndOrder">
            <Amount />
            <Button name="include" />
          </div>
        )}
      </Content>
    </Container>
  )
}
