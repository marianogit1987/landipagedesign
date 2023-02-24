import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import './Registro.css';

const Registro = () => {
  return (
    <div className='LoginContainer'>
        <h1>Crea tu cuenta</h1>
          <form className='Form'>
            <label>
                <input type="Nombre" placeholder='Nombre'/>
                <input type="mail" placeholder='mail'/>
                <input type="password" placeholder='password'/>
                <p className='Ingresar'>O podes ingresar con</p>
                <img className='Logo'>
                    <FcGoogle /> Google
                </img>
                <p className='Cuenta'>Ya tenes una cuenta? Inicia Sesion</p>
                <input type="Submit">Registrarse</input>
            </label>
          </form>
        
    </div>
  );
    
};

export default Registro;