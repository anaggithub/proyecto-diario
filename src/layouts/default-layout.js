import React from "react"
import "./../styles/styles.scss";
import Header from "./../components/header/header";
import Footer from "./../components/footer/footer";

const DefaultLayout = (props) => {

    return (
        <div className="container">
            <Header />
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
