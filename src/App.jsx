import './App.css';
import {NativeBaseProvider } from 'native-base';
import { Suspense, lazy } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Loading from './Components/Loading';
import NavBar from './Components/NavBar';


const Home = lazy(() => import('./Pages/Home'));
const Login = lazy(() => import('./Pages/Login'));
const ListProdutos = lazy(() => import('./Pages/Produtos/list'));

const breakpoints = {
  small: "576px"
}


function App() {
  return (
    <NativeBaseProvider>

      <Router>

        <NavBar breakpoints={breakpoints} LogoTitle={"Caduzin"}/>

        <Suspense fallback={<Loading />}>
        
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />}/>
              <Route path='/produtos' element={<ListProdutos />} />
          </Routes>
        
        </Suspense>
        
      </Router>
    
    </NativeBaseProvider>
  );
}

export default App;
