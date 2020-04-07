import React from "react";
import Headerprofile from "../components/Headerprofile";
import Card from "../components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style/header_profile.css";

class userprofile extends React.Component {
    render() {
      return (
        <div>
            <header>
            <Headerprofile
            imagen="https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg"
            nombre="David Mendoza"
            correo="@david.mendoza"
            union="Usuario desde octubre de 2019"
            acerca="Acerca de David Mendoza"
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
            cursos="Cursos comprados"
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
  export default userprofile;