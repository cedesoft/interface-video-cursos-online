import React from "react";
import "./style/formcommentary.css";

class commentary extends React.Component {
  render() {
    return (
      <div className="commentary">
          <img src={this.props.imagen} />
          <h5>{this.props.titulo}</h5>
          <h6>{this.props.titulo2}</h6>
          <div className="description">
          <h10>{this.props.descripcion}</h10>
          </div>
      </div>
    );
  }
}
export default commentary;
