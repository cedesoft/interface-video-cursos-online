import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './style/Icon.css'

class Icon extends React.Component{
    render(){
        return(
            <div className="ImageIcon">
                <img src="https://cdn4.iconfinder.com/data/icons/education-free/512/education-school-learn-study-04-512.png"/>
                <h1>Lorem Ipsum </h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque velit gravida tempor lobortis. Donec sit amet arcu iaculis..</p>
            </div>
        )
    }
}
export default Icon