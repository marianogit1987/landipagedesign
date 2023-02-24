import React from 'react';
import { listacategoria } from '../Lista_Categoria';
import Category from '../Category/Category';

const Home = () => {
  return (
    <div className='ContainerCategoria'>
        {listacategoria.map((listacategoria) =>
        <Category key={listacategoria.id} 
        {...listacategoria} />
        )} 
    </div>
    
    
  )
};

export default Home;