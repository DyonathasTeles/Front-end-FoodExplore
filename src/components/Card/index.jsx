import { Container, Content } from "./style";
import { Amount } from "../Amount"
import { Button } from "../Button"
import {FiHeart} from "react-icons/fi"
import img from "../../assets/Maskgroup.png"


export function Card({data, admin, ...rest}) {

  return (
    <Container>
      <Content>
        <button className="buttonHeart" type="button"> <FiHeart/> </button>

        <img src={img} alt="" />
        
        <div className="cardTexts">
        <h2> Ravanello Salad  </h2>        

        <p>uma salada cheia de guloseimas</p>

        <span>R$ 49,97 </span>
        </div>

        <Amount/>

        <Button name="include"/>
      </Content>
    </Container>
  )
}