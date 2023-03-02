import { Component } from 'react'
import './App.css'
import EmptyUI from './EmptyUI'
import PasswordElement from './PasswordElement'

class PasswordDisplayList extends Component {

    // render() {
    //     // console.log(this.props)
    //     const { searchInput, passwordList, isChecked } = this.props
    //     console.log(searchInput, passwordList, isChecked)

    //     return (
    //         <div >
    //             <p>Hey</p>
    //         </div>
    //     )
    // }




    render() {
        const { searchInput, passwordList, isChecked } = this.props
let searchInputMatchText= searchInput.toLowerCase()

        const hasSubstring = passwordList.some(obj =>
            obj.website.includes(searchInput),
        )
        // console.log(hasSubstring, typeof hasSubstring)

        console.log(searchInput)

        if (passwordList.length === 0) {
            return <EmptyUI />
        }
        if (hasSubstring === false) {
            return <EmptyUI />
        }
        console.log(passwordList.length)
        const filteredItemsList =
            searchInput === ''
                ? passwordList
                : passwordList.filter(obj => obj.website.toLowerCase().includes(searchInput))

        return (
            <div className="PasswordDisplayList">
                {filteredItemsList.map(item => (

                    <PasswordElement
                        key={item.id}
                        deleteFromPasswordList={this.props.deleteFromPasswordList}
                        id={item.id}
                        username={item.userName}
                        website={item.website}
                        password={item.password}
                        isChecked={isChecked}
                    />
                ))}
            </div>
        )
    }
}

export default PasswordDisplayList