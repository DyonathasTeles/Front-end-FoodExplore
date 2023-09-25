import { Amount } from '../../components/Amount'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Container, Content } from './style'

import { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { PiReceiptBold } from 'react-icons/pi'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { PriceFormater } from '../../utils/price'

export function Dish() {
  const navigate = useNavigate()
  const params = useParams()

  const [data, setData] = useState(null)
  const [avatarName, setAvatarName] = useState('')

  const avatarUrl = `${api.defaults.baseURL}/files/${avatarName}`

  function navigationHome() {
    return navigate(-1)
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
      setAvatarName(response.data.avatar)
    }

    fetchDish()
  }, [params.id])

  return (
    <Container>
      <Header />
      {data && (
        <Content>
          <ButtonText
            className="buttonCard"
            icon={MdOutlineKeyboardArrowLeft}
            name="Back"
            onClick={navigationHome}
          />

          <div className="product">
            <div className="img-dish">
              <img src={avatarUrl} alt={data.name} />
            </div>

            <div className="information">
              <div className="details">
                <h2>{data.name}</h2>
                <p>{data.description}</p>

                {data.tags && (
                  <div className="tags">
                    {data.tags.map((tag) => (
                      <Tag key={String(tag.id)} title={tag.name} />
                    ))}
                  </div>
                )}
              </div>

              <div className="purchase-amount">
                <Amount />

                {window.innerWidth > 820 ? (
                  <Button
                    className="ButtonOrder"
                    name={`include ∙ ${PriceFormater(data.price)}`}
                    loading
                  />
                ) : (
                  <Button
                    className="ButtonOrder"
                    name={`order ∙ ${PriceFormater(data.price)}`}
                    icon={PiReceiptBold}
                    loading
                  />
                )}
              </div>
            </div>
          </div>
        </Content>
      )}
      <Footer />
    </Container>
  )
}
