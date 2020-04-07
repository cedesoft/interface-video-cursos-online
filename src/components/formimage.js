import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/formimage.css";

class formimage extends React.Component{
    render(){
        return(
            <div className="cardn">
                <div className="form">
                    <h3>APARIENCIA</h3>
                </div>
                <div className="cardcontent">
                    <img src="https://images.pexels.com/photos/4040305/pexels-photo-4040305.png"></img>
                        <small>imagen de usuario (600 * 600 recomendado)</small>
                    <div className="div_file">
                    <input className="btn_examinar"  name="myImage" accept="image/x-png,image/gif,image/jpeg" type="file" size="150" maxlength="150"></input>
                    </div>
                    <label><input type="checkbox"/>Eliminar imagen</label>
                    <button className="btn">Guardar cambios</button>
                </div>
            </div>
        );
    }
}

export default formimage