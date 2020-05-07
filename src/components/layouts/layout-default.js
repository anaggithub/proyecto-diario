import React from "react"
import "../../styles/styles.scss"
import Header from "../header";
import Footer from "../footer";

const DefaultLayout = ({children}) => {

    return (
        <div className="container">
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
