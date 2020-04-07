import React from "react";
import Card from "../components/Card";
import Commentary from "../components/Commentary";
import Detailcontainer1 from "../components/Detailcontainer1";
import Detailabout from "../components/Detailabout";
import Navbarauth from "../components/navbarauth";
import Footer from "../components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../components/style/formdetailcourse.css";
import commentary from "../components/Commentary";


class coursedetail extends React.Component {
  render() {
    return (
      <div>
       <Navbarauth/>
        <div className="headercontentcourse">
          <h1>Lorem ipsum dolor sit amet, consectetura</h1>
          <h3>Por Lorem impsum dolor</h3>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque velit gravida tempor lobortis.</h5>
            </div>
           <div className="stylecard">
           <Card
                    titulo="curso de finanzas"
                    profesor="Antonio damian"
                    descripcion="Lorem ipsum"
                    imagen="https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg"
                  />
           </div>

           <div className="container">


               <div className="title">
               <h3>Lo que aprenderas</h3> 
               <div class="row">
               <div class="col-12 col-md-6 col-lg-6 mb-4">
                 <Detailcontainer1
                 aprendizaje="*Lorem ipsum dolor sit amet"
                 />
               </div>
               <div class="col-12 col-md-6 col-lg-6 mb-4">

               <Detailcontainer1
                 aprendizaje="*Lorem ipsum dolor sit amet"
                 />

               </div>
               <div class="col-12 col-md-6 col-lg-6 mb-4">

               <Detailcontainer1
                 aprendizaje="*Lorem ipsum dolor sit amet"
                 />

               </div>
               <div class="col-12 col-md-6 col-lg-6 mb-4">

               <Detailcontainer1
                 aprendizaje="*Lorem ipsum dolor sit amet"
                 />

               </div>
               <div class="col-12 col-md-6 col-lg-6 mb-4">

               <Detailcontainer1
                 aprendizaje="*Lorem ipsum dolor sit amet"
                 />

               </div>
               <div class="col-12 col-md-6 col-lg-6 mb-4">

               <Detailcontainer1
                 aprendizaje="*Lorem ipsum dolor sit amet"
                 />

               </div>
               <div class="col-12 col-md-6 col-lg-6 mb-4">

               <Detailcontainer1
                 aprendizaje="*Lorem ipsum dolor sit amet"
                 />
               </div>
               <div class="col-12 col-md-6 col-lg-6 mb-4">

               <Detailcontainer1
                 aprendizaje="*Lorem ipsum dolor sit amet"
                 />

               </div>
              </div>
              </div>



              <div className="title2">
              <h3>Acerca del curso</h3> 
              <Detailabout
              about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt nunc purus, 
              non varius nunc auctor in. Etiam vel turpis tellus. Morbi sagittis nibh eget consectetur auctor."
              />
              
                  <div class="row">
               <div class="col-3">
               <h7>Duracion</h7>
               </div>
               <div class="col-3">
               <h7>Rapido Aprendizaje</h7>
               </div>
               <div class="col-3">
               <h7>Español</h7>
               </div>
              </div>
              </div>


              <div className="title3">
              <h3>Requisitos</h3> 
                  <div class="row">
                  <div class="col-12 col-md-6 col-lg-6 mb-4">
                   <Detailcontainer1
                   aprendizaje="*Lorem ipsum dolor sit amet"
                   />
              </div>
              <div class="col-12 col-md-6 col-lg-6 mb-4">
                   <Detailcontainer1
                   aprendizaje="*Lorem ipsum dolor sit amet"
                   />
              </div>
              <div class="col-12 col-md-6 col-lg-6 mb-4">
                   <Detailcontainer1
                   aprendizaje="*Lorem ipsum dolor sit amet"
                   />
              </div>
              <div class="col-12 col-md-6 col-lg-6 mb-4">
                   <Detailcontainer1
                   aprendizaje="*Lorem ipsum dolor sit amet"
                   />
              </div>
              </div>
              </div>

              <div className="title4">
              <h3>Contenido del curso</h3> 
             
             
               <div class="dropdowncourse">
                        <button class="btn btn-light btn-lg btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                       Modulo 1: Lorem ipsum dolor sit amet
                        </button>
                        <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                         <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                         </div>
                   </div>
                   <h1></h1>

                   <div class="dropdowncourse">
                        <button class="btn btn-light btn-lg btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        Modulo 2: Lorem ipsum dolor sit amet
                        </button>
                        <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                         <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                         </div>
                   </div>
                   <h1></h1>

                   <div class="dropdowncourse">
                        <button class="btn btn-light btn-lg btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        Modulo 3: Lorem ipsum dolor sit amet
                        </button>
                        <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                         <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                         </div>
                   </div>
                   <h1></h1>
                   <div class="dropdowncourse">
                        <button class="btn btn-light btn-lg btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                       Modulo 4: Lorem ipsum dolor sit amet
                        </button>
                        <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                         <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                         </div>
                   </div>
                   <h1></h1>
                   <div class="dropdowncourse">
                        <button class="btn btn-light btn-lg btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                       Modulo 5: Lorem ipsum dolor sit amet
                        </button>
                        <div class="dropdown-menu t" aria-labelledby="dropdownMenuButton">
                         <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                         </div>
                   </div>
                   <h1></h1>
              </div>

              <div className="title5">
              <h3>Valoraciones</h3> 
               <div class="row">
               <div class="col-2">
               <h2>4.90</h2>
               </div>
               <div class="col-6">
               <h6>1250 Recomiendan este curso</h6>
               <h6>5 No recomiendan este curso</h6>
               </div>
               <div class="col-6">
               <h7>Basado en 1255 reseñas</h7>
               </div>
              </div>
              </div>
             </div>

             <div className="comentario">
             <Commentary
          imagen="https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg"
          titulo="Juanito Hernandez"
          titulo2="Recomienda este curso"
          descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt nunc purus, non varius 
          nunc auctor in. Etiam vel turpis tellus. Morbi sagittis nibh eget consectetur auctor. "
           />
           <br></br>
            <Commentary
          imagen="https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg"
          titulo="Lorem Ipsum"
          titulo2="Recomienda este curso"
          descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt nunc purus, non varius 
          nunc auctor in. Etiam vel turpis tellus. Morbi sagittis nibh eget consectetur auctor. "
           />
              <br></br>
            <Commentary
          imagen="https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg"
          titulo="Lorem Ipsum"
          titulo2="Recomienda este curso"
          descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt nunc purus, non varius 
          nunc auctor in. Etiam vel turpis tellus. Morbi sagittis nibh eget consectetur auctor. "
           />
             </div>
             <br></br>
           
    </div>
    );
  }
}

export default coursedetail;