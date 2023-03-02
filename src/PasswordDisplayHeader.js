import { Component } from 'react'
import './App.css'



class PasswordDisplayHeader extends Component {

    toHandleSearchInputChange = (event) => {
        this.props.toHandleSearchInputChange(event.target.value);
    }

    render() {
        return (
            <div className='PasswordDisplayHeader'>
                <div className='PasswordDisplayHeaderCounter' >
                    <p>Your Passwords</p>
                    <p> {this.props.length}</p>
                </div>
                <div className="searchLogoDiv">
                    <img
                        className="searchLogo"
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    />
                    <input
                        type="text"
                        className="searchLogoText"
                        placeholder="Search Here"
                        onChange={this.toHandleSearchInputChange}
                    />
                </div>
            </div>

        )
    }
}

export default PasswordDisplayHeader            