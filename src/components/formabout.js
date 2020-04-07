import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/formabout.css";

class formabout extends React.Component {
  render() {
    return (
      <div className="cardnew">
        <div className="formnew">
          <h3>SOBRE TI</h3>
        </div>
        <div className="formc">
          <div className="formname">
            <input
              type="text"
              className="form-control form-group"
              placeholder="Nombre"
            ></input>
          </div>
          <div className="formlastname">
            <input
              type="text"
              className="form-group form-control"
              placeholder="Apellidos"
            ></input>
          </div>
          <div className="formnickname">
            <input
              className="form-group form-control"
              type="text"
              placeholder="Nombre de usuario"
            ></input>
          </div>
          <div className="formabout">
              <textarea className="form-group form-control" placeholder="Cuentanos sobre ti"></textarea>
          </div>
          <div className="formbutton">
                <button className="btn form-group">Guardar Cambios</button>
          </div>
        </div>
      </div>
    );
  }
}

export default formabout;
