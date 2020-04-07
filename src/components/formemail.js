import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/formemail.css";

class formemail extends React.Component {
  render() {
    return (
      <div className="cardemail">
        <div className="formnewemail">
          <h3>CORREO ELECTRONICO (Puedes cambiar tu correo electronico) </h3>
        </div>
        <div className="formcemail">
        <div className="formememail">
            <input
              type="email"
              className="form-control"
              placeholder="Correo electronico nuevo"
            ></input>
            <label className="form-group bg-danger">Es necesario ingresar la contraseña para realizar los cambios</label>
          </div>
          <div className="formempass">
                <input type="password" className="form-group form-control" placeholder="Contraseña"></input>
          </div>
          <div className="formembtn">
                <button className="btn">Guardar cambios</button>
          </div>
        </div>
      </div>
    );
  }
}

export default formemail;
