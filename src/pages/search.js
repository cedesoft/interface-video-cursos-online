import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../components/Card";
import "../components/style/formsearch.css";
import "../components/style/welcome.css";

class search extends React.Component {
    render() {
        return (
            <div>

                <div className="res" >
                    <div className="titulo" >
                        <p>Resultados de búsqueda “Lorem Ipsum Dolor”</p></div>
                </div>
                <br></br>
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
            </div>
            <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">1</a></li>
                                <li class="page-item">
                                <a class="page-link" href="#">2</a></li>
                                <li class="page-item">
                                <a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    </div>
          </div>
            
        );
    }
}

export default search;