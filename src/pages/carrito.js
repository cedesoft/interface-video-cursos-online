import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Formcarrito from "../components/formcarrito";
import Resumencompra from "../components/resumencompra";
import Navbarauth from "../components/navbarauth";



class carrito extends React.Component {
    render() {
        return (
            <div>
                <Navbarauth />
                <div className="res" >
                    <div className="titulo" >
                        <p>Carrito de compras</p>
                    </div>
                 
                    <Formcarrito />
                    <Resumencompra />

            
                  
                    
                </div>

            </div>

        );
    }
}

export default carrito;