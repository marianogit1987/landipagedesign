import React from 'react';
import './Navbar.css';
import { AiFillHome } from 'react-icons/ai';
import { HiUser } from 'react-icons/hi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import logo from '../assets/img/logo_empresa.png';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as userActions from '../Redux/User/user_actions';



const Navbar = () => {

  const navigate = useNavigate ();
  
  const dispatch = useDispatch ();

  const currentUser = useSelector (state => state.user.currentUser);

  // // const onClickRedirect = (route) =>{
	// // 	if(currentUser){
	// // 		dispatch(userActions.toggleMenuHidden())
	// // 	}else{
	// // 		window.location.href = route
	// // 	};

  // };
	
  


  return (
     <div className='Navbar_Container'>
        <ul className='Navbar_Menu'>
            <img src={logo} alt='logo'></img>
          <li>
           <AiFillHome className='Home'/>

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

