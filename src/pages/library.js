import React from "react";
import Card from "../components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../components/style/formlibrary.css";


class library extends React.Component {
  render() {
    return (
      <div>
        <div className="headercontentlibrary">
          <h1>Bliblioteca de cursos</h1>
            </div>
            <div className="container">
                
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mb-4">

                    
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        Todos los cursos
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                         <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                         </div>
                   </div>
                    
            </div>
         </div>

                
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

export default library;