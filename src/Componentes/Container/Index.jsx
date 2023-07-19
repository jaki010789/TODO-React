import React from "react";
import "./styles.css";
import AgregarTarea from "../agregarTarea/Index";


const Container = () => {
   
return (

        <div className="header text-center">

            <h3 className="titulo"> To Do List </h3>
            <AgregarTarea/>
            
        </div>

);
}

export default Container;