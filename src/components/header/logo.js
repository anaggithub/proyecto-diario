import React from "react";
import "../../styles/styles.scss";

// class Logo extends React.Component {

//     componentDidMount() {
//         const searchInputClass = document.getElementsByClassName("searchinput")
//         const searchInput = searchInputClass[0];
//         console.log(searchInput)
//         // const { logoDisplay } = this.props
//         // logoDisplay = window.getComputedStyle(searchInput).display === "none" ? "none" : "block";
//         // console.log(logoDisplay)
//     }

//     //style={{ display: logoDisplay }}
//     render() {
//         return (
//             <figure >
//                 <img
//                     src={process.env.PUBLIC_URL + "images/logo_infobae_naranja.svg"}
//                     alt="logo"
//                     className="logo"
//                 />
//             </figure>
//         );
//     }
// }

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