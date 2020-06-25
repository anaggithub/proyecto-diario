import React from "react";
import "./index.scss";

function Input({ text, name, type, placeholder, onChange, error, errorMessage }) {
    return (
        <div className="input">
            <div className="input--row">
                <label className="input--row--label">{text}</label>
                <input
                    className={`input--row--input ${error ? 'errorClass' : ""}`}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </div>
            <div className="input--row">
                {error && <p className="input--row--error">{`Ingrese un ${errorMessage} válido!`}</p>}
            </div>
        </div>
    );
}

export default Input