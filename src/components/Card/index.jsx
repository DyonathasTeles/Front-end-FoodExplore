import { Container, Content, Heart } from "./style";
import { Amount } from "../Amount"
import { Button } from "../Button"

import {FiHeart} from "react-icons/fi"
import { BsPencil } from "react-icons/bs"
import img from "../../assets/Maskgroup.png"

import { useState } from "react";


export function Card({data, admin=true, ...rest}) {

  const [like, setLike] = useState(false)

  function handleMenuOpen(open) {
    setLike(!like)
  }

  return (
    <Container>
      <Content>
        {admin ? 
        <BsPencil className="pencil" />
         :
        <Heart>
          <input type="checkbox" onChange={handleMenuOpen} /> 
          <div className="checkmark">
          <FiHeart/>
          </div>
        </Heart>
        }

        <img src={img} alt="" />
        
        <div className="cardTexts">
        <h2> Ravanello Salad  </h2>        

        <p>uma salada cheia de guloseimas</p>

        <span>R$ 49,97 </span>
        </div>

        {admin ?
        <></> : 
        <>
        <Amount />
        <div className="buttonInclude">
        <Button name="include" />
        </div>
        </>
      
        }
      </Content>
    </Container>
  )
}