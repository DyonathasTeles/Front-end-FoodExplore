import { Container, Content, Form } from "./style"
import { InputImg } from "../../components/InputImg"
import { Textarea } from "../../components/Textarea"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"

import back from "../../assets/back.svg"
import { TagColor } from "../../components/TagColor"

export function NewDish() {
  return (
    <Container>
      <Header/>

      <Content>
        <Form>
          <div className="return">
          <button><img src={back} alt="" /> Back </button>
          </div>

          <h1>New Dish</h1>
          
          <div className="img-dish">
          <p>Dish image</p>
          <InputImg  />
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

          <div className="Ingredients">

            <p>Ingredients</p>

            <div className="tag-ingredients">
              <TagColor value="tomate" />
              <TagColor isNew={true} />
            </div>

          </div>

          <div className="Prices">
            <p>Price</p>
            <Input type="number" placeholder="R$ 00,00"/>
          </div>

          <div className="Description">
            <p>Description</p>
            <Textarea placeholder="Briefly talk about the dish, its ingredients and composition" />
          </div>

          <Button name="Save editions" />

        </Form>
      </Content>

      <Footer/>
    </Container>
  )
}