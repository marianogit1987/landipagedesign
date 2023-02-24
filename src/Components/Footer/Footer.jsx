import React from 'react';
import './Footer.css';
import {GrInstagram} from 'react-icons/gr';
import {BsFacebook} from 'react-icons/bs';
import {AiFillYoutube} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='Footer'>
        <h4 className='Reservado'>Todos los derechos reservados</h4>
            <div className='Redes'>
              <GrInstagram className='Instagram'/>
              <BsFacebook className='Facebook'/>
              <AiFillYoutube className='Youtube'/>
            </div>
    </div>
  )
}

export default Footer;