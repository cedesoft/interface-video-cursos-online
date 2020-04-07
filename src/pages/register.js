import React from "react";
import "../components/style/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Formlogin from "../components/formlogin";

class register extends React.Component {
  render() {
    return (
      <section>
        <div className="row no-gutters bg-light">
          <div className="col-xl-6 col-lg-12 imagelogin abs-center">
            <div className="position-absolute p-6">
              <h3 class="font-weight-bold  text-center fontt">Unete hoy</h3>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto p-4">
            <div className="container align-self-center p-6">
              <h1 class="text-center textcolor">Registro</h1>
              <div className="formlo">
                <Formlogin
                  boton="Registrate"
                  pregunta="¿Ya tienes una cuenta?"
                  link1="Inicia sesion"
                  direccion=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default register;
