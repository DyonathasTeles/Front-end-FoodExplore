import { Container, Content } from "./style"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { Amount } from "../../components/Amount"
import { Tag } from "../../components/Tag"

import { PiReceiptBold } from "react-icons/pi"
import back from "../../assets/back.svg"
import dish from "../../assets/Mask group-2.png"

export function Dish() {
  

  return (
    <Container>

      <Header className="mobile" />

      <Content>
        <button className="back"> <img src={back} alt="back to previous pages" /> Back</button>

        <div className="product">

          <div className="img-dish">
            <img src={dish} alt="" />
          </div>

          <div className="information">

          <div className="details">
            <h2>Salad Ravanello</h2>
            <p>Radishes, green leaves and sweet and sour sauce sprinkled with sesame seeds.</p>

            <div className="tags">
            <Tag title="pão" />
            <Tag title="tomate" />
            <Tag title="cebola" />
            <Tag title="macarrão" />
            <Tag title="pepino" />
            <Tag title="abacaxi" />

            </div>
          </div>

          <div className="purchase-amount">
              <Amount/>

              {window.innerWidth > 820 ? <Button className="ButtonOrder" name="include ∙ R$ 25,00" loading/> : <Button className="ButtonOrder" name="order ∙ R$ 25,00" icon={PiReceiptBold} loading/>}

          </div>
          
          </div>

        
        </div>

      </Content>
      <Footer/>
    </Container>
  )
}