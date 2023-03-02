import { Component } from 'react'
import './App.css'
import PasswordComponentHeader from './PasswordComponentHeader'
import PasswordForm from './PasswordForm'
import PasswordDisplay from './PasswordDisplay'

class PasswordComponent extends Component {


    state = { userName: "", website: "", password: "", passwordList: [] }

    deleteFromPasswordList = (id) => {


        const newPasswordList = [...this.state.passwordList];
        const index = newPasswordList.findIndex(item => item.id === id);
        newPasswordList.splice(index, 1);
        this.setState({ passwordList: newPasswordList });
    }
    toAddElementsinPasswordList = (userName, website, password) => {
        console.log(2)
        const id = this.state.passwordList.length + 1;
        console.log(id)
        const newObj = { id: id, userName: userName, website: website, password: password };
        const updatedArray = [...this.state.passwordList, newObj];
        this.setState({ passwordList: updatedArray });
    }

    render() {
        const { userName, website, password, passwordList } = this.state
        console.log(passwordList)
        return <div className="PasswordComponent">
            <PasswordComponentHeader />
            <PasswordForm
                toAddElementsinPasswordList={this.toAddElementsinPasswordList}
                deleteFromPasswordList={this.deleteFromPasswordList}
            />
            <PasswordDisplay
                passwordList={passwordList}
                deleteFromPasswordList={this.deleteFromPasswordList}

            />
        </div >
    }


}
export default PasswordComponent