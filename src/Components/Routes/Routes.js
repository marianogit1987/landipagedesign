import { Routes as ReactDomRoutes, Route, } from "react-router-dom";
import Home from "../Home/Home";
// import Home from "../Home/Home";


import Registro from '../Registro/Registro';

function Routes () {
    return (
        <ReactDomRoutes>
            <Route path ='/' element={<Home />} />
            <Route path ='/Registro' element={<Registro />} />
        </ReactDomRoutes>
        
    );
}

export default Routes;