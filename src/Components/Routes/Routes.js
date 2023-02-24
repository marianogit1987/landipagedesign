import { Routes as ReactDomRoutes, Route, } from "react-router-dom";
import Home from "../Home/Home";
import Registro from '../Registro/Registro';

function Routes () {
    return (
        <ReactDomRoutes>
            <Route path='/' element={<Registro />} />
            <Route path ='/Registro' element={<Home />} />
        </ReactDomRoutes>
        
    );
}

export default Routes;