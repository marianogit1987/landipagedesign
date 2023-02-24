import React from 'react';
import Category from './Components/Category/Category';
import ContainerCategory from './Components/Category/ContainerCategory';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Nabvar/Navbar';
import {listacategoria} from './Components/Lista_Categoria';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Components/Routes/Routes';
import Home from './Components/Home/Home';





function App() {
  return (
    <Container>
      <BrowserRouter>
      <Home />
      <Navbar />
      {/* <h2>Nuestros Productos</h2>
      <div className='ContainerCategoria'>
          {listacategoria.map((listacategoria) =>
          <Category key={listacategoria.id} 
          {...listacategoria} />
          )} 
      </div> */}
      
      </BrowserRouter>
      <Footer />
    </Container>
  );    
}

export default App;
