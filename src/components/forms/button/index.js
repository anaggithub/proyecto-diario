import React from "react";
import "./index.scss";

function Button({text, classes, onClick}) {
    return (
        <div className="form--row">
            <button className={`form--row--button ${classes}`} onClick={onClick} >{text}</button>
        </div>
    );
}

export default Button