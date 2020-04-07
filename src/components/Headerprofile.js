import React from "react";
import "./style/header_profile.css";
import "bootstrap/dist/css/bootstrap.min.css";

class header extends React.Component {
  render() {
    return (
      <div className="headercontent">
        <div className="headerimage">
          <img src={this.props.imagen} />

          <h2>{this.props.nombre}</h2>
          <h4>{this.props.correo}</h4>
          <p>{this.props.union}</p>
          <div className="headerlink">
            <a href="" className="">
              {this.props.sesion}
            </a>
          </div>
          <div className="headerbutton">
            <a href="">{this.props.editar}</a>
          </div>
        </div>
        <div className="container text-container">
          <div className="row">
            <div className="col-12">
              <h5 className="">{this.props.acerca}</h5>
              <p className="text-muted text-left">{this.props.info}</p>

              <h6>{this.props.cursos}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default header;
