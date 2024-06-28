import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
    <Container>
      <Typography variant="h4">Cadastrar Produto</Typography>
      <form onSubmit={handleSubmit}>
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
      </form>
    </Container>
  );
};

export default FormProdutos;