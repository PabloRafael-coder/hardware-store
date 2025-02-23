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
import {
  Container,
  Label,
  Input,
  LabelUpload,
  InputUpload,
  ContainerOffer
} from './styles';

function EditProduct() {
  const [nameLabelUpload, setNameLabelUpload] = useState();
  const [categories, setCategories] = useState();

  const schema = Yup.object().shape({
    name: Yup.string().required('Insira o nome do produto'),
    price: Yup.string().required('Insira o valor do produto'),
    category: Yup.object().required('Carregue a imagem do produto'),
    offer: Yup.bool()
  });
  const {
    push,
    location: {
      state: { product }
    }
  } = useHistory();

  console.log(product);

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
    productDataForm.append('offer', data.offer);

    await toast.promise(api.put(`products/${product.id}`, productDataForm), {
      pending: 'Aguarde o produto ser editado',
      success: 'Produto editado com sucesso',
      error: 'Erro ao editar o produto'
    });

    setTimeout(() => {
      push('/listar-produtos');
    }, 2000);
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
          <Input
            type="text"
            {...register('name')}
            defaultValue={product.name}
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
            defaultValue={product.category}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={cat => cat.name}
                  getOptionValue={cat => cat.id}
                  defaultValue={product.category}
                />
              );
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
  );
}

export default EditProduct;
