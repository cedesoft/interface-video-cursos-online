import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/resumencompra.css";

class resumencompra extends React.Component {
    render() {
        return (
            <div>
            
                <div className="resultado">
                <div className="titleResultado">
                    <p>Resultado</p>
                </div>
                <div className="line"></div>
                <div className="numCurso">
                    <p>2 cursos a comprar</p>
                </div>
                <div className="cursoComprado1">
                    <p>Curso 1:Lorem ipsum dolor</p>
                <div className="precio1">
                    <p>$599.00 MXN</p>
                </div>
                </div>
                
                <div className="cursoComprado2">
                    <p>Curso 2:Lorem ipsum dolor si</p>
                <div className="precio2">
                    <p>$599.00 MXN</p>
                </div>
                </div>
                <div className="line2"></div>
                <div className="total">
                    <p>Total:</p>
                <div className="precioTotal">
                    <p>$ 1,199.98 MXN:</p>
                </div>
                </div>
            <div>
            <button className="btnpedido">Guardar cambios</button>
            </div>
                
                </div>

                <div className="seguirComprando">
                    <p>Seguir comprando </p>
                </div>
               
                


    
            </div>
            
        );
    }
}

export default resumencompra;