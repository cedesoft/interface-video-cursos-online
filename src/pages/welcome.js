import React from "react";
import ReactDOM from "react-dom";
import Card from "../components/Card";
import ImageWelcome from "../components/ImageWelcome";
import Title from "../components/Title";
import Description from "../components/description";
import Icon from "../components/Icon";
import "../components/style/welcome.css";
import "bootstrap/dist/css/bootstrap.min.css";

class welcome extends React.Component {
  render() {
    return (
      <div>
        <header>
          <ImageWelcome />
          <Title />
        </header>
        <section>
          <div className="container">
            <div className="row">
              <Description />
              <Icon />
            </div>
          </div>
        </section>
        <section className=" mt-4 card-new">
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
export default welcome;
