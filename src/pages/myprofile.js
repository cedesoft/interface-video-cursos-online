import React from "react";
import Headerprofile from "../components/Headerprofile";
import Card from "../components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style/header_profile.css";

class myprofile extends React.Component {
  render() {
    return (
      <div>
          <header>
          <Headerprofile
          imagen="https://images.pexels.com/photos/4040305/pexels-photo-4040305.png"
          nombre="Antonio Muñoz Aguayo"
          correo="@antonio.munoz"
          union="Usuario desde febrero de 2019"
          sesion="Cerrar sesión"
          editar="Editar perfil"
          acerca="Acerca de mi"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas tincidunt nunc purus, non varius nunc auctor in. 
                Etiam vel turpis tellus. Morbi sagittis nibh eget consectetur auctor. 
                Nulla nisi libero, venenatis in tortor ac, aliquet porttitor nibh. 
                Integer rutrum est a metus hendrerit, ac viverra justo ultricies. 
                Quisque neque justo, bibendum et lectus non, viverra vestibulum leo. 
                Ut hendrerit gravida ultricies. Sed eget velit facilisis, 
                interdum velit id, faucibus ante. In auctor tortor a dui congue, ultrices finibus velit venenatis. 
                Integer nisi metus, lacinia porta pharetra ut, imperdiet et augue. 
                Phasellus a mauris pretium, consectetur nibh vitae, mattis felis."
          cursos="Mis cursos comprados"
        />
          </header>
        <section className="mt-4 card-n">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
                <Card
                  titulo="curso de finanzas"
                  profesor="Antonio damian"
                  descripcion="Lorem ipsum"
                  imagen="https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg"
                />
              </div>
              
            <div className="col-12 col-md-6 col-lg-4 mb-4">
                <Card
                  titulo="curso de finanzas"
                  profesor="Antonio damian"
                  descripcion="Lorem ipsum"
                  imagen="https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg"
                />
              </div>
              
            <div className="col-12 col-md-6 col-lg-4 mb-4">
                <Card
                  titulo="curso de finanzas"
                  profesor="Antonio damian"
                  descripcion="Lorem ipsum"
                  imagen="https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg"
                />
              </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
                <Card
                  titulo="curso de finanzas"
                  profesor="Antonio damian"
                  descripcion="Lorem ipsum"
                  imagen="https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg"
                />
              </div>
              
          </div>
        </div>
        </section>
        
      </div>
    );
  }
}
export default myprofile;
