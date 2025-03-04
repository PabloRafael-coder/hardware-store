import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ReactSelect from 'react-select';
import { toast } from 'react-toastify';

import { Button, ErrorMessage } from '../../../components';
import { api } from '../../../services/api';
import { Container, Label, Input, LabelUpload, InputUpload } from './styles';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schemaNewProduct = z.object({
  name: z.string(),
  price: z.string(),
  category: z.object({id: z.number(), name: z.string()}),
  file: z.any()
})

interface Category {
  id: number
  name: string
}

type SchemaNewProductType = z.infer<typeof schemaNewProduct>

function NewProduct() {
  const [nameLabelUpload, setNameLabelUpload] = useState<string | null>('');
  const [categories, setCategories] = useState<Category[]>();
  
  const { push } = useHistory();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<SchemaNewProductType>({
    resolver: zodResolver(schemaNewProduct)
  });

  async function handleNewProduct (data: SchemaNewProductType){
    const productDataForm = new FormData();

    productDataForm.append('name', data.name);
    productDataForm.append('price', data.price);
    productDataForm.append('category_id', JSON.stringify(data.category.id));
    productDataForm.append('file', data.file[0]);

    await toast.promise(api.post('products', productDataForm), {
      pending: 'Produto sendo registrado, aguarde...',
      success: 'Produto registrado',
      error: 'Erro ao registrar o produto'
    });

    setTimeout(() => {
      push('/listar-produtos');
    }, 3000);
  };

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');
      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(handleNewProduct)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>
        <div>
          <LabelUpload>
            <CloudUploadOutlinedIcon fontSize="large" />
            {nameLabelUpload ?? 'Carregue a imagem do produto'}
            <InputUpload
              type="file"
              accept="imagem/png, imagem,jpeg"
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
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={cat => cat.name}
                  getOptionValue={cat => cat.id.toString()}
                />
              );
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <Button style={{ marginTop: 30 }}>Adicionar Produto</Button>
      </form>
    </Container>
  );
}

export default NewProduct;
