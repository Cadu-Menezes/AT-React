import React, { Suspense, lazy, useState, useEffect } from 'react';
import { NativeBaseProvider } from 'native-base';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Loading from './Components/Loading';
import NavBar from './Components/NavBar';
import FakeProdutos from '../src/Utils/fake';
import addProduto from '../src/Utils/cadastro';

const Home = lazy(() => import('./Pages/Home'));
const Login = lazy(() => import('./Pages/Login'));
const ListProdutos = lazy(() => import('./Pages/Produtos/list'));
const FormProdutos = lazy(() => import('./Pages/Produtos/form'));

const breakpoints = {
  small: "576px"
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [products, setProducts] = useState();

  useEffect(() => {
    FakeProdutos(setProducts, products);
  }, [products]);

  return (
    <NativeBaseProvider>
      <Router>
        <NavBar breakpoints={breakpoints} LogoTitle={"Caduzin"} />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route 
              path='/login' 
              element={<Login breakpoints={breakpoints} LogoTitle="Kduzin" setIsAuthenticated={setIsAuthenticated} />} 
            />
            <Route 
              path='/' 
              element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />} 
            />
            <Route 
              path='/produtos' 
              element={isAuthenticated ? <ListProdutos products={products} /> : <Navigate to="/login" replace />} 
            />
            <Route 
              path='/produtos/cadastrar' 
              element={isAuthenticated ? <FormProdutos addProduto={(product) => addProduto(setProducts, product)} /> : <Navigate to="/login" replace />} 
            />
          </Routes>
        </Suspense>
      </Router>
    </NativeBaseProvider>
  );
}

export default App;