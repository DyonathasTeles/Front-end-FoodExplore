import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { InputImg } from '../../components/InputImg'
import { Textarea } from '../../components/Textarea'
import { Container, Content, Form } from './style'

import { useState } from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { TagColor } from '../../components/TagColor'
import { api } from '../../services/api'

export function NewDish() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('Meals')

  const [tags, setTags] = useState([])
  const [newTag, setNewTags] = useState('')

  const [avatarFile, setAvatarFile] = useState(null)

  async function createdDish({ dish, avatarFile }) {
    try {
      const response = await api.post('/dishes', dish)
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        await api.patch(
          `/dishes/avatar/${response.data.dish_id}`,
          fileUploadForm,
        )
      }
      navigate('/')
      toast.success('dish created')
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error('unable to create dish')
      }
    }
  }

  async function handleCreated() {
    const dish = {
      name,
      description,
      price,
      tags,
      category,
    }

    await createdDish({ dish, avatarFile })
  }

  function handleChangeAvatar(event) {
    const files = event.target.files[0]
    setAvatarFile(files)
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTags('')
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  function handleNavigateHome() {
    navigate('/')
  }

  return (
    <Container>
      <Header />

      <Content>
        <Form>
          <div className="return">
            <ButtonText
              className="buttonCard"
              icon={MdOutlineKeyboardArrowLeft}
              name="Back"
              onClick={handleNavigateHome}
            />
          </div>

          <h1>New Dish</h1>
          <div className="container1">
            <div className="img-dish">
              <p>Dish image</p>
              <InputImg onChange={handleChangeAvatar} />
            </div>

            <div className="name-dish">
              <p>Dish name</p>
              <Input
                cor
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Example: Caesar Salad"
              />
            </div>

            <div className="Category">
              <p>Category</p>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="Meals">Meals</option>
                <option value="Main dishes">Main dishes</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>
          </div>

          <div className="container2">
            <div className="Ingredients">
              <p>Ingredients</p>

              <div className="tag-ingredients">
                {tags.map((tag, index) => (
                  <TagColor
                    key={String(index)}
                    value={tag}
                    onClick={() => {
                      handleRemoveTag(tag)
                    }}
                  />
                ))}
                <TagColor
                  placeholder="new tag"
                  isNew={true}
                  onChange={(e) => setNewTags(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                />
              </div>
            </div>

            <div className="Prices">
              <p>Price</p>
              <Input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="R$ 00,00"
              />
            </div>
          </div>

          <div className="Description">
            <p>Description</p>
            <Textarea
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Briefly talk about the dish, its ingredients and composition"
            />
          </div>
          <div className="buttonSave">
            <Button
              className="buttonSaveEditions"
              name="Save editions"
              onClick={handleCreated}
            />
          </div>
        </Form>
      </Content>

      <Footer />
    </Container>
  )
}
