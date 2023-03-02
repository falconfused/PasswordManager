import { Component } from 'react'
import './App.css'
import PasswordDisplayHeader from './PasswordDisplayHeader'
import PasswordDisplayList from './PasswordDisplayList'



class PasswordDisplay extends Component {
    state = { searchInput: '', isChecked: false }

    toHandleSearchInputChange = (value) => {
        this.setState({ searchInput: value });

    }

    isShowPasswordChecked = () => {
        const { isChecked } = this.state
        this.setState({ isChecked: !isChecked });
    }
    render() {
        const { searchInput, isChecked } = this.state
        console.log(this.props)
        return (
            <div className='PasswordsDisplay'>
                <PasswordDisplayHeader toHandleSearchInputChange={this.toHandleSearchInputChange} length={this.props.passwordList.length} />
                <div className='ShowPassword'>
                    <div >
                        <input className='checkbox' type="checkbox"
                            onClick={this.isShowPasswordChecked
                            }
                        />
                        <label >Show password</label>

                    </div>
                </div>
                <PasswordDisplayList deleteFromPasswordList={this.props.deleteFromPasswordList} searchInput={searchInput} isShowPasswordChecked={this.isShowPasswordChecked} passwordList={this.props.passwordList} isChecked={isChecked} />
            </div>


        )
    }
}

export default PasswordDisplay