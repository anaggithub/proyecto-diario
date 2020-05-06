import React from "react";
import "../../styles/styles.scss";

function Logo() {

    return (
        <figure style={{ display: "block" }}>
            <img
                src={process.env.PUBLIC_URL + "images/logo_infobae_naranja.svg"}

                alt="logo"
                className="logo"
            />
        </figure>
    );
}

export default Logo;