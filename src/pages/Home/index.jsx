import Splide from '@splidejs/splide'
import '@splidejs/splide/css/skyblue'
import { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import fruit from '../../assets/pngegg2.png'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { api } from '../../services/api'
import { Container, Content } from './style'

export function Home() {
  const [search, setSearch] = useState('')
  const [dishes, setDishes] = useState([])
  const [favorites, setFavorites] = useState([])

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
  }, [dishes])

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes?search=${search}`)
        setDishes(response.data)
        const { data } = await api.get('/favorites')
        if (data.length) {
          const favoritesFilter = data.map((item) => item.id)
          setFavorites(favoritesFilter)
        }
      } catch {
        alert('error')
      }
    }

    fetchDishes()
  }, [search])

  return (
    <Container>
      <Header onChange={(e) => setSearch(e.target.value)} />

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
                {dishes
                  .filter((item) => item.category === 'Meals')
                  .map((dish) => (
                    <li key={String(dish.id)} className="splide__slide">
                      <Card
                        data={dish}
                        id={dish.id}
                        isFavorite={favorites.includes(dish.id)}
                      />
                    </li>
                  ))}
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
                {dishes
                  .filter((item) => item.category === 'Main dishes')
                  .map((dish) => (
                    <li key={String(dish.id)} className="splide__slide">
                      <Card
                        data={dish}
                        id={dish.id}
                        isFavorite={favorites.includes(dish.id)}
                      />
                    </li>
                  ))}
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
                {dishes
                  .filter((item) => item.category === 'Drinks')
                  .map((dish) => (
                    <li key={String(dish.id)} className="splide__slide">
                      <Card
                        data={dish}
                        id={dish.id}
                        isFavorite={favorites.includes(dish.id)}
                      />
                    </li>
                  ))}
              </ul>
            </div>
          </section>
        </div>
      </Content>

      <Footer />
    </Container>
  )
}
