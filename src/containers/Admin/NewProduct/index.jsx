import { yupResolver } from '@hookform/resolvers/yup';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ReactSelect from 'react-select';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Button, ErrorMessage } from '../../../components';
import { api } from '../../../services/api';
import { Container, Label, Input, LabelUpload, InputUpload } from './styles';

function NewProduct() {
  const [nameLabelUpload, setNameLabelUpload] = useState();
  const [categories, setCategories] = useState();
  const { push } = useHistory();

  const schema = Yup.object().shape({
    name: Yup.string().required('Insira o nome do produto'),
    price: Yup.string().required('Insira o valor do produto'),
    category: Yup.object().required('Carregue a imagem do produto'),
    file: Yup.mixed().test('required', 'Carregue uma imagem', value => {
      return value?.length > 0;
    })
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async data => {
    const productDataForm = new FormData();

    productDataForm.append('name', data.name);
    productDataForm.append('price', data.price);
    productDataForm.append('category_id', data.category.id);
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
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
              onChange={value =>
                setNameLabelUpload(value.target.files[0]?.name)
              }
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
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
                  getOptionValue={cat => cat.id}
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
