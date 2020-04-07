import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/formrecover.css"

class formrecover extends React.Component{
    render(){
        return(
            <div>
                <h1 className="text-center color_text">¿Olvidaste tu contraseña?</h1>
                <p className="text-center text-muted">Introduce tu dirección de correo electrónico a continuación.<br/>
                             Echaremos un vistazo a tu cuenta y te enviaremos<br/> un correo electrónico para restablecer tu contraseña.</p>
                <div className="formrecoveremail">
                    <input className="form-control form-group" placeholder="Correo electronico"/>
                </div>
                <div className="formrecoverbtn">
                    <button className ="btn form-control">Ingresar</button>
                </div>
                <div className="formrecoverregreso">
                    <p className="text-center">
                    <a  href="">Ir a inicio de sesión</a>
                    </p>
                </div>
                <br/>
            
            </div>
        );
    }
}

export default formrecover