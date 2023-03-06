import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import './Registro.css';


const Registro = () => {
  return (
    <div className='LoginContainer'>
        <h1>Crea tu cuenta</h1>
          <form className='form'>

              <label></label>
              <input type="text"  placeholder='Nombre'/>

              <label></label>
              <input type="email" placeholder='Email'/>

              <label></label>
              <input type="password" placeholder='Contraseña' />

              <div className='Ingreso'>O podés ingresar con</div>

              <div className='ContainerGoogle'>
                  <FcGoogle className='LogoGoogle'/>
                  <div className='Goggle'>Google</div>
              </div>

              <div className='Inicio_Sesion'>¿Ya tenes cuenta? Inicia sesión</div>

              <input className='Registrarte' type="submit" value="Registrarte"/>

          </form>
    </div>
  );
    
}

export default Registro;