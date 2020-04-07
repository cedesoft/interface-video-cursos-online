import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './style/Title.css'

class Title extends React.Component{
    render(){
        return(
            <div className="Title">
                <div className="Title">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                    <button className="btn1">Ver los cursos</button>
                    <button className="btn2">Unete ahora gratis</button>
                </div>
            </div>
        )
    }
}
export default Title