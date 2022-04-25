import React from "react";
import './index.css'

const LinkButton = (props) => {
    return (
        <button
            className="link-button"
            {...props}>
            {props.children}
        </button>
    )
}

export default LinkButton;
