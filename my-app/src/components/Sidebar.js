import React from "react"
import css from "./css/Sidebar.module.css"

const Sidebar = (props) => {
    return <div className = {css.sidebar} >
        <a>MyPhotos</a>
        <a>MyIllustrations</a>
        <a>My Paintings</a>
        </div>
}

export default Sidebar;