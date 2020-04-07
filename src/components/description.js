import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './style/description.css'

class Description extends React.Component{
    render(){
        return(
            <div className="description">
                   <h1>¿Qué es AppLogo?</h1>
                   <div className="description1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque velit gravida tempor lobortis. Donec sit amet arcu iaculis..</p>

                </div>
            </div>
        )
    }
}
export default Description