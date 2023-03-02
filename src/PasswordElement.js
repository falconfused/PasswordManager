import { Component } from 'react'
import './App.css'



class PasswordElement extends Component {

    deleteElementfromList = (id) => {
        this.props.deleteFromPasswordList(id);
    }

    render() {
        const { id,
            username,
            website,
            isChecked, password } = this.props
        // console.log(username)
        return (
            <div className='PasswordElement'>
                <div className='PasswordElementNameCircular'>{website[0]}</div>
                <div className='PasswordElementCredentials'>
                    <p>{website}</p>
                    <p>{username}</p>

                    {isChecked ? <p className='password'>{password}</p> : <img className='stars' src='https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png' />}
                </div>
                <img onClick={() => this.deleteElementfromList(id)} className='PasswordElementdelete' src='https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png' />
            </div>
        )
    }
}

export default PasswordElement


// 0FCCA4