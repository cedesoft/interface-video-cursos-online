import React from "react";
import Headerprofile from "../components/Headerprofile";
import Formimage from "../components/formimage";
import Formabout from "../components/formabout";
import Formpass from "../components/formpassword";
import Formemail from "../components/formemail";
import Navbarauth from "../components/navbarauth";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style/header_profile.css";
import "../components/style/editprofile.css";

class editprofile extends React.Component {
  render() {
    return (
      <div>
        <div className="row no-gutters">
          <Headerprofile
            imagen="https://images.pexels.com/photos/4040305/pexels-photo-4040305.png"
            nombre="Antonio Muñoz Aguayo"
            correo="@antonio.munoz"
            union="Usuario desde febrero de 2019"
          />
        </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="form1">
                  <Formimage />
                </div>
                <div className="form2">
                  <Formabout />
                </div>
                <div className="form3">
                  <Formpass />
                </div>
                <div className="form4">
                  <Formemail />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default editprofile;
