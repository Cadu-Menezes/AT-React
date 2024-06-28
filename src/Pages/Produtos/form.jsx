import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled(Container)`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormProdutos = ({ addProduto }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && price) {
      addProduto({ name, price: parseFloat(price) });
      navigate('/produtos');
    }
  };

  return (
    <FormContainer>
      <Typography variant="h4">Cadastrar Produto</Typography>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          variant="outlined"
          margin="normal"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Preço"
          variant="outlined"
          margin="normal"
          fullWidth
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </FormContainer>
  );
};

export default FormProdutos;