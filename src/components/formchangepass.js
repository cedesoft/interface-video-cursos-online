import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/formchangepass.css"


class formchangepass extends React.Component{
    render(){
        return(
            <div>
                <br/>
                <h1 class="text-center text_new">Cambiar contraseña</h1>
                <div className="formchangeemail">
                <input type="text" class="form-control form-group" placeholder="Correo electronico"/>
                </div>
                <div className="formchangenewpass">
                <input type="text" class="form-control form-group" placeholder="Contraseña nueva"/>
                </div>
                <div className="formchangerepeat">
                <input type="text" class="form-control form-group" placeholder="Repetir contraseña"/>
                </div>
                <div className="formchangebtn">
                <button class=" form-control btn">Guardar cambios</button>
                </div>
                <br/>
            </div>
        );
    }
}

export default formchangepass