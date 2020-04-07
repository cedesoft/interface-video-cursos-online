import React from "react";
import "../components/style/formsearch.css";
import "../components/style/failsearch.css";
import "bootstrap/dist/css/bootstrap.min.css";


class search extends React.Component {
    render() {
        return (
            <div>
                <div className="res" >
                    <div className="titulo" >
                        <p>Resultados de búsqueda “Lorem Ipsum Dolor”</p></div>
                </div>
                <div className="fail">
                    <p>Su búsqueda Lorem Ipsum Dolor no coincide con ningún curso</p>
                </div>
                <div className="fail2">
                <p>Asegúrese de que todas las palabras estén escritas correctamente
                 Intenta una búsqueda diferente</p>
                </div> 
          </div>
            
        );
    }
}

export default search;