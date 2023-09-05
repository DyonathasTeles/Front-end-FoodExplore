import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { InputImg } from '../../components/InputImg'
import { Textarea } from '../../components/Textarea'
import { Container, Content, Form } from './style'

import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { TagColor } from '../../components/TagColor'
import { useNavigate } from 'react-router-dom'

export function EditDish() {
  const navigate = useNavigate()

  function navigationHome() {
    return navigate(-1)
  }
  return (
    <Container>
      <Header />

      <Content>
        <Form>
          <div className="return">
            <ButtonText
              onClick={navigationHome}
              className="buttonCard"
              icon={MdOutlineKeyboardArrowLeft}
              name="Back"
            />
          </div>

          <h1>Edit Dish</h1>
          <div className="container1">
            <div className="img-dish">
              <p>Dish image</p>
              <InputImg />
            </div>

            <div className="name-dish">
              <p>Dish name</p>
              <Input cor type="text" placeholder="Example: Caesar Salad" />
            </div>

            <div className="Category">
              <p>Category</p>
              <select name="" id="">
                <option value="">Meals</option>
                <option value="">Main dishes</option>
                <option value="">Drinks</option>
              </select>
            </div>
          </div>

          <div className="container2">
            <div className="Ingredients">
              <p>Ingredients</p>

              <div className="tag-ingredients">
                <TagColor value="tomate" />
                <TagColor isNew={true} />
              </div>
            </div>

            <div className="Prices">
              <p>Price</p>
              <Input type="number" placeholder="R$ 00,00" />
            </div>
          </div>

          <div className="Description">
            <p>Description</p>
            <Textarea placeholder="Briefly talk about the dish, its ingredients and composition" />
          </div>

          <div className="buttons">
            <Button dark name="Delete dish" />
            <Button name="Save editions" />
          </div>
        </Form>
      </Content>

      <Footer />
    </Container>
  )
}
