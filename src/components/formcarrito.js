import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/carrito.css";

class formcarrito extends React.Component {
    render() {
        return (
          
            <div>
                
               
                <div className="delete" >
                    <p>Eliminar</p>
                </div>
                <div className="detalle">
                    <p>Detalle</p>
                </div>
                <div className="compra">
                    <p>Seguir comprando</p>
                </div>
                <div className="containerC">
                    <div className="image" />
                    <img src="" />
                </div>
                <div className="title" >
                    <p>Lorem ipsum dolor</p>
                </div>
                <div className="subio">
                    <p>Por Lorem ipsum dolor</p>
                </div>
        
                <div className="descripcion">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque velit gravida tempor lobortis.</p>
                </div>   
                <div className="precioActual">
                    <p>$ 599.99 Mx</p>
                </div>
                <div className="precioAnterior">
                    <p>$ 899.99 Mx</p>
                </div>

            </div>
           
        );
    }
}

export default formcarrito;