import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/formpass.css";

class formpass extends React.Component {
  render() {
    return (
      <div className="cardpass">
        <div className="formnewpass">
          <h3>CONTRASEÑA(Puedes cambiar tu contraseña)</h3>
        </div>
        <div className="formcpass">
               <div className="formpassnow">
                    <input type="password" className="form-control" placeholder="Contraseña" />
                    <label className="form-group bg-danger">Es necesario ingresar la contraseña para realizar los cambios</label>
               </div>
               <div className ="formpasswordnew">
                    <input type="password" className="form-control form-group" placeholder="Nueva contraseña"/>
               </div>
               <div className="formpasscon">
               <input type="password" className="form-control form-group" placeholder="Repetir Contraseña"/>
               </div>
               <div className="formbtnpass">
                    <button className="btn form-group">Guardar cambios</button>
               </div>
          </div>
      </div>
    );
  }
}

export default formpass;
