import React from "react"

function NavBarChild(props) {
    return (
        <div>
             {props.isLoggedIn ? (
                <div>
                <form>
                    <label>Username:</label>
                    <input></input>
                    <label>Password:</label>
                    <input></input>
                </form>
                
                </div>
                ) : (
                    <div></div>
                    
                )}
        </div>
    )
}

export default NavBarChild