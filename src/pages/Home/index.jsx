import Splide from '@splidejs/splide'
import '@splidejs/splide/css/skyblue'
import { useEffect } from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import fruit from '../../assets/pngegg2.png'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container, Content } from './style'

export function Home() {
  useEffect(() => {
    new Splide('.splide', {
      pagination: false,
      autoWidth: true,
      focus: 'left',
    }).mount()

    new Splide('#slide2', {
      pagination: false,
      autoWidth: true,
      focus: 'left',
    }).mount()

    new Splide('#slide3', {
      pagination: false,
      autoWidth: true,
      focus: 'left',
    }).mount()
  }, [])

  return (
    <Container>
      <Header />

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
          <section className="splide" aria-label="Splide Basic HTML Example">
            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev">
                <MdOutlineKeyboardArrowRight />
              </button>
              <button className="splide__arrow splide__arrow--next">
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  <Card />
                </li>
                <li className="splide__slide">
                  <Card />
                </li>
                <li className="splide__slide">
                  <Card />
                </li>
                <li className="splide__slide">
                  <Card />
                </li>
                <li className="splide__slide">
                  <Card />
                </li>
                <li className="splide__slide">
                  <Card />
                </li>
                <li className="splide__slide">
                  <Card />
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="Main-dishes section">
          <h2>Main dishes</h2>
          <section
            id="slide2"
            className="splide"
            aria-label="Splide Basic HTML Example"
          >
            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev">
                <MdOutlineKeyboardArrowRight />
              </button>
              <button className="splide__arrow splide__arrow--next">
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  <Card />
                </li>
                <li className="splide__slide">
                  <Card />
                </li>
                <li className="splide__slide">
                  <Card />
                </li>
                <li className="splide__slide">
                  <Card />
                </li>
                <li className="splide__slide">
                  <Card />
                </li>
                <li className="splide__slide">
                  <Card />
                </li>
                <li className="splide__slide">
                  <Card />
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="Drinks section">
          <h2>Drinks</h2>
          <section
            id="slide3"
            className="splide"
            aria-label="Splide Basic HTML Example"
          >
            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev">
                <MdOutlineKeyboardArrowRight />
              </button>
              <button className="splide__arrow splide__arrow--next">
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  <Card />
                </li>
                <li className="splide__slide">
                  <Card />
                </li>
                <li className="splide__slide">
                  <Card />
                </li>
                <li className="splide__slide">
                  <Card />
                </li>
                <li className="splide__slide">
                  <Card />
                </li>
                <li className="splide__slide">
                  <Card />
                </li>
                <li className="splide__slide">
                  <Card />
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Content>

      <Footer />
    </Container>
  )
}
