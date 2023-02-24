import React from "react";
import './Category.css';




const Category = ({img, title, id}) => {
    return(
        <div className="container_Category">
            <div className="Categorias">
                <img className="Imagen" src={img}/>
                <p className="Titulo">
                    <p>{title}</p>
                </p>
            </div>
        </div>
    );
}

export default Category;