import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { InputImg } from '../../components/InputImg'
import { Textarea } from '../../components/Textarea'
import { Container, Content, Form } from './style'

import { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { TagColor } from '../../components/TagColor'
import { api } from '../../services/api'

export function EditDish() {
  const params = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTags] = useState('')

  const [avatarFile, setAvatarFile] = useState(null)

  async function updateDish({ dish, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        const response = await api.patch(
          `/dishes/avatar/${params.id}`,
          fileUploadForm,
        )
        dish.avatar = response.data.avatar
      }

      await api.put(`/dishes/${params.id}`, dish)

      alert('dish updated successfully')
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('unable to update dish')
      }
    }
  }

  async function handleUpdated() {
    const dish = {
      name,
      description,
      price,
      tags,
      category,
    }

    await updateDish({ dish, avatarFile })
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

  async function handleDeleteDish() {
    const confirm = window.confirm('Are you sure you want to delete the dish?')

    if (!confirm) {
      return
    }

    try {
      await api.delete(`/dishes/${params.id}`)
      toast.success('dish deleted')
      navigate('/')
    } catch (error) {
      toast.error(error)
    }
  }

  function navigationHome() {
    return navigate('/')
  }

  useEffect(() => {
    async function showDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setName(response.data.name)
      setDescription(response.data.description)
      setPrice(response.data.price)
      setTags(response.data.tags.map((tag) => tag.name))
      setCategory(response.data.category)
    }

    showDish()
  }, [params.id])
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
              <InputImg onChange={handleChangeAvatar} />
            </div>

            <div className="name-dish">
              <p>Dish name</p>
              <Input
                cor
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="Category">
              <p>Category</p>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="Description">
            <p>Description</p>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="buttons">
            <Button dark name="Delete dish" onClick={handleDeleteDish} />
            <Button name="Save editions" onClick={handleUpdated} />
          </div>
        </Form>
      </Content>

      <Footer />
    </Container>
  )
}
