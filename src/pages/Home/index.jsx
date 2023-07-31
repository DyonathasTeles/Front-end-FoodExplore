import { Container, Content } from "./style";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Card } from "../../components/Card"
import fruit from "../../assets/pngegg2.png"

export function Home() {
  return (
    <Container> 

      <Header/>

      <Content>
        <div className="description">

          <img src={fruit} alt="fruits" />
          
          <div className="text">

          <h3>Unparalleled flavors</h3>
          <p>Feel the care of the preparation with selected ingredients.</p>
          </div>

        </div>

        <div className="Meals section">
            <h2>Meals</h2>

            <div className="cards">
            <Card/>
            <Card/>
            </div>
        </div>

        <div className="Main-dishes section">
            <h2>Main dishes</h2>

            <div className="cards">
            <Card/>
            <Card/>
            </div>
        </div>

        <div className="Drinks section">
            <h2>Drinks</h2>

            <div className="cards">
            <Card/>
            <Card/>
            </div>

        </div>
      </Content>

      <Footer/>

    </Container>
  )
}