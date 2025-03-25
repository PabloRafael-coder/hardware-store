import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'
import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import { z } from 'zod'

import { Button, ErrorMessage } from '../../../components'
import { api } from '../../../services/api'
import {
  Container,
  Label,
  Input,
  LabelUpload,
  InputUpload,
  ContainerOffer,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'

const schemaEditForm = z.object({
  name: z.string({ required_error: 'Adicione o nome do produto' }),
  price: z.string({ required_error: 'Adicione o valor do produto' }),
  offer: z.boolean(),
  category: z.object({ id: z.number(), name: z.string() }),
  file: z.any(),
})

type SchemaEditFormType = z.infer<typeof schemaEditForm>

interface Category {
  id: number
  name: string
}

interface HistoryProduct {
  product: {
    category: Category
    id: number
    category_id: number
    name: string
    price: number
    offer: boolean
    path: string
    url: string
    createdAt: string
    updatedAt: string
  }
}

function EditProduct() {
  const [nameLabelUpload, setNameLabelUpload] = useState<string | null>('')
  const [categories, setCategories] = useState<Category[]>()
  const {
    push,
    location: {
      state: { product },
    },
  } = useHistory<HistoryProduct>()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SchemaEditFormType>({
    resolver: zodResolver(schemaEditForm),
  })

  async function handleEditForm(data: SchemaEditFormType) {
    const productDataForm = new FormData()

    productDataForm.append('name', data.name)
    productDataForm.append('price', data.price)
    productDataForm.append('category_id', JSON.stringify(data.category.id))
    productDataForm.append('file', JSON.stringify(data.file[0]))
    productDataForm.append('offer', JSON.stringify(data.offer))

    await toast.promise(api.put(`products/${product.id}`, productDataForm), {
      pending: 'Aguarde o produto ser editado',
      success: 'Produto editado com sucesso',
      error: 'Erro ao editar o produto',
    })

    setTimeout(() => {
      push('/listar-produtos')
    }, 2000)
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(handleEditForm)}>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            defaultValue={product.name}
            required
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input
            type="number"
            {...register('price')}
            defaultValue={product.price}
          />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>
        <div>
          <LabelUpload>
            <CloudUploadOutlinedIcon fontSize="large" />
            {nameLabelUpload ?? 'Carregue a imagem do produto'}
            <InputUpload
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              {...register('file')}
              onChange={(value) => {
                if (!value.target.files) return
                setNameLabelUpload(value.target.files[0]?.name)
              }}
            />
          </LabelUpload>
        </div>
        <div>
          <Controller
            name="category"
            control={control}
            defaultValue={product.category}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={(cat) => cat.name}
                  getOptionValue={(cat) => cat.id.toString()}
                  defaultValue={product.category}
                />
              )
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>
        <ContainerOffer>
          <input
            type="checkbox"
            {...register('offer')}
            defaultChecked={product.offer}
          />
          <p>Seu produto está em oferta?</p>
        </ContainerOffer>
        <Button style={{ marginTop: 30 }}>Adicionar Produto</Button>
      </form>
    </Container>
  )
}

export default EditProduct
