import React from 'react';
import Category from './Components/Category/Category';
import ContainerCategory from './Components/Category/ContainerCategory';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Nabvar/Navbar';
import Routes from './Components/Routes/Routes';
import Registro from './Components/Registro/Registro';
import { ReactDomRoutes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';


function App() {
  return (
      <Container>
        <Navbar />
        <Routes />
        <Footer />
      </Container>
    );    
}

export default App;
