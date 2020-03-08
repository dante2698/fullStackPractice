import React, { Component } from 'react'
import '../css/styles.css'
//IMPORTING THE CSS
//the below implementation does not work
//import '../../public/styles.css'


/*const getYear = () => {
    const date = new Date();
    return date.getFullYear();  
}*/


// const user = {
//     name: 'elizabeth',
//     lastName: 'swann',
//     age:18
// }


class Header extends Component {
    state = {
    keywords:''
    }

    inputChangeHandler = (event) =>
    {
        this.setState(
            {
                keywords:''
            }
        )
        
    }
    render() {
        return (
            <header>
            <div className="logo"
            onClick={ () =>{console.log("logo was clicked")} }>LOGO</div>
           <input type = "text" onChange={this.inputChangeHandler}></input>
        </header>
        )
    }
}

export default Header;