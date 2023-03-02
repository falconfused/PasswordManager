import { Component } from 'react'
import './App.css'

class EmptyUI extends Component {
  render() {
    return (
      <div className="EmptyUI">
        <img src='https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'></img>
        <h1>No Passwords</h1>
      </div>
    )
  }
}

export default EmptyUI
