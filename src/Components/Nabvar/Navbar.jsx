import React from 'react';
import './Navbar.css';
import { AiFillHome } from 'react-icons/ai';
import { HiUser } from 'react-icons/hi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgMenu } from 'react-icons/cg';
import logo from '../assets/img/logo_empresa.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as userActions from '../Redux/User/user_actions';
import { useState } from 'react';


const Navbar = () => {

  const navigate = useNavigate ();
  
  const dispatch = useDispatch ();

  const currentUser = useSelector (state => state.user.currentUser);

  const [isOpen, setIsOpen] = useState(false);



	return (
     <div className='Navbar_Container'>
        <ul className='Navbar_Menu'>
            <img src={logo} alt='logo'></img>

            <div className= {`nav_toogle ${ isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          

            <li className={`Menu ${ isOpen && "open"}`} >
            <Link to= '/'>
              <AiFillHome className='Home'/>
            </Link>

            <HiUser className='User' 
              onClick={()=>
                currentUser?
                dispatch(userActions.toggleMenuHidden())
                :navigate('/Registro')
              }
            />

            <AiOutlineShoppingCart className='Cart'/>
          </li>
        </ul>
        
      </div>
    );
  
}

export default Navbar;

