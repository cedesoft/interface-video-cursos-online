import React from "react";
import "./style/Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <img src={this.props.imagen} />
        </div>
        <div className="card-content">
          <h1>{this.props.titulo}</h1>
          <span>Impartido por {this.props.profesor}</span>
          <p>{this.props.descripcion}</p>
          <a href="">Ver mas</a><button className="">Añadir al carrito</button>
        </div>
      </div>
    );
  }
}
export default Card;
