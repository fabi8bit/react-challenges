import React from "react"
import css from "./css/NavBarForm.module.css"
import NavForm from "./NavBarChild";
import NavBarChild from "./NavBarChild";

class NavBarForm extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            isLoggedIn: true,
            buttonText: "Submit"
            
        }
    }

    handleClick () {
        this.setState((prevState, prevProps) => {
            console.log('previous state', prevState)
            return {
                isLoggedIn: prevState.isLoggedIn === true ? false : true,
                buttonText: prevState.buttonText === "Submit" ? "Log In" : "Submit"
                

                
            }
            
        })
    }
    
    
    
    render() {
        return (
            <div className = {css.NavBar} >
                <h1>My Gallery</h1>
                <NavBarChild isLoggedIn={this.state.isLoggedIn} />
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>

            </div>
        )
    }
}



export default NavBarForm;