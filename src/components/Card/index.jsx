import { Amount } from '../Amount'
import { Button } from '../Button'
import { Container, Content, Heart } from './style'

import { BsPencil } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { PriceFormater } from '../../utils/price'

export function Card({ data, id, isFavorite, ...rest }) {
  const [like, setLike] = useState(isFavorite)
  const navigate = useNavigate()
  const { user } = useAuth()

  const avatarUrl = `${api.defaults.baseURL}/files/${data.avatar}`

  function navigationDishPreview() {
    return navigate(`/dish/${id}`)
  }

  function navigationToEditDish() {
    return navigate(`/edit/${id}`)
  }

  async function handleFavorite() {
    setLike(!like)
    try {
      if (!like) {
        await api.post(`/favorites/${id}`)
        toast.success('added to favorite')
        return
      }
      await api.delete(`/favorites/${id}`)
      toast.success('removed to favorites')
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    if (isFavorite) {
      setLike(isFavorite)
    }
  }, [isFavorite])

  return (
    <Container>
      <Content {...rest}>
        {user.role === 'admin' ? (
          <BsPencil onClick={navigationToEditDish} className="pencil" />
        ) : (
          <Heart>
            <input type="checkbox" onChange={handleFavorite} checked={like} />
            <div className="checkmark">
              <FiHeart />
            </div>
          </Heart>
        )}

        <img onClick={navigationDishPreview} src={avatarUrl} alt={data.name} />

        <div className="cardTexts">
          <h2 onClick={navigationDishPreview}> {data.name} </h2>

          <p onClick={navigationDishPreview}>{data.description}</p>

          <span> {PriceFormater(data.price)} </span>
        </div>

        {user.role === 'admin' ? (
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
