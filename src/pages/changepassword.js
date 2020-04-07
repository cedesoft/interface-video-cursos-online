import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style/recoverpass.css";
import Formchange from "../components/formchangepass"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

class changepass extends React.Component{
    render(){
        return(
            <section>
                <div className="row no-gutters bg-ligth">
                    <div className="col-xl-12 col-lg-12 bgrecover abs-center">
                        <div className="position-absolute p-4">
                            <div className="container align-self-center bg-light">
                                <Formchange/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default changepass