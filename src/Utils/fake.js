const FakeProdutos = (setProduto, products) => {
    if (!products) {
      const ListProdutos = [
        { id: 1, name: 'Produto A', price: 100 },
        { id: 2, name: 'Produto B', price: 200 },
      ];
      setProduto(ListProdutos);
    }
  };
  
export default FakeProdutos;