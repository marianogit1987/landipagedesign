import React,  { useEffect} from 'react';
import './Container.css';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as userActions from '../Redux/User/user_actions';


const Container = ({children}) => {
  // const dispatch = useDispatch();
  // const hiddenMenu = useSelector(state => state.user.hiddenMenu);
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   if (!hiddenMenu) {
  //     dispatch(userActions.toggleMenuHidden());
  //   }
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return <div>{children}</div>  
  
}

export default Container;