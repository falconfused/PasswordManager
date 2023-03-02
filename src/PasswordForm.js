import { Component } from 'react'
import './App.css'


class PasswordFormInput extends Component {




    render() {
        const classtoPut = `${this.type} form`
        return (<div className={classtoPut}>
            <img className='form-icons' src={this.props.imgUrl} alt='webiste' />
            <input onChange={(event) => this.props.handleSearchChangeInput(event, this.props.type)}></input>
        </div>)
    }

}


class PasswordForm extends Component {
    state = { userName: '', website: '', password: "", allCredentialsarePresent: true }

    handleSearchChangeInput = (event, type) => {

        if (type === 'website') {
            this.setState({ website: event.target.value });

        }
        if (type === 'username') {
            this.setState({ userName: event.target.value });

        }
        if (type === 'password') {
            this.setState({ password: event.target.value });

        }


    }
    checkifValid = () => {
        const { userName, website, password } = this.state
        if (userName != "" && website != "" && password != "") {
            this.props.toAddElementsinPasswordList(userName, website, password);
            this.setState({ allCredentialsarePresent: true });
        }
        else {
            this.setState({ allCredentialsarePresent: false });
        }


    }

    render() {
        const { userName, website, password, allCredentialsarePresent } = this.state
        // console.log(website)
        // console.log(userName)
        // console.log(password)

        return (
            <div className='PasswordForm'>
                <div className='PasswordFormElement'>
                    <p>Add New Password</p>
                    {/* <div className='website form'>
                        <img className='form-icons' src='https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png' alt='webiste' />
                        <input onChange={(event) => this.handleSearchChangeInput(event, "website")}></input>
                    </div> */}

                    <PasswordFormInput imgUrl={"https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"} handleSearchChangeInput={this.handleSearchChangeInput} type={"website"} checkifValid={this.checkifValid} />
                    <PasswordFormInput imgUrl={"https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"} handleSearchChangeInput={this.handleSearchChangeInput} type={"username"} checkifValid={this.checkifValid} />
                    <PasswordFormInput imgUrl={"https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"} handleSearchChangeInput={this.handleSearchChangeInput} type={"password"} checkifValid={this.checkifValid} />
                    {/* <div className='username form'>
                        <img className='form-icons' src='https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png' alt='username' />
                        <input onChange={(event) => this.handleSearchChangeInput(event, "username")}></input>
                    </div>
                    <div className='password form'>
                        <img className='form-icons' src='https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png' alt='password' />
                        <input onChange={(event) => this.handleSearchChangeInput(event, "password")}></input>

                    </div> */}
                    <div>
                        {allCredentialsarePresent == false ? <p className='error-message'>Please Enter all Details</p> : null}
                    </div>
                    <div className='Submit'>

                        <button className='buttonSubmit' onClick={this.checkifValid}>
                            Submit
                        </button>

                    </div>
                </div >
                <img className='PasswordFormImage' src='https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png' alt='password manager' />

            </div>

        )
    }
}

export default PasswordForm