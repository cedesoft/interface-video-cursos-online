import React from 'react'
import './style/navbar.css'
class navbar extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">APPLOGO</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline">
            <input className="form-control form-group " type="search" placeholder="Teclea que estas buscando" aria-label="Search" />
            <button className="btn navbtn" type="submit"><img className="navimage" src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/search-512.png"/></button>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item active navpos">
              <a className="nav-link navcenter" href="/">Inicio <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active navpos">
              <a className="nav-link navcenter" href="/">Biblioteca</a>
            </li>
            <li className="nav-item active navpos">
              <a className="nav-link navcenter" href="/">Preguntas frecuentes</a>
            </li>
            <li className="nav-item active navpos">
              <a className="nav-link navcenter" href="/">
                  <img className="navimage2" src="https://media.istockphoto.com/vectors/shopping-cart-icon-vector-id639201180"/>
              </a>
            </li>
            <div className="navbtnregister form-group">
            <li className="nav-item">
                <a className="btn navcenter">Registrate</a>
            </li>
            </div>
            <div className="navbtnlogin form-group">
                <li className="nav-item">
                    <a className="btn navcenter">Inicia sesión</a>
                </li>
            </div>
            
          </ul>
        </div>
      </nav>
            </div>
        )
    }

}

export default navbar