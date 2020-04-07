import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/formlogin.css"

class formemail extends React.Component{
    render(){
        return(
            <div>
                <div className="formloginemail">
                <input type="email" className="form-group form-control" placeholder="Correo electronico"/>
                </div>
                <div className ="formloginpass">
                    <input type="password" className="form-group form-control" placeholder="Contraseña"/>
                </div>
                <div className="formloginbtn">
        <button className="btn form-control">{this.props.boton}</button>
                    
        <span class="text-muted text-left">{this.props.pregunta}</span>
        <span class="text-rigth"><a href={this.props.direccion} class="">{this.props.link1}</a></span>
                    
                    <p class="text-center text-muted">Cuando te registras aceptas nuestros</p>
                    <p class="text-center text-muted"><a href="" class="">Terminos y politicas de privacidad</a></p>
                </div>
            </div>
        );
    }
}

export default formemail