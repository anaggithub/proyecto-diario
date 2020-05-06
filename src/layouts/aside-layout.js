import React from "react"
import "./../styles/styles.scss";
import "./aside-layout.scss";
import Header from "./../components/header/header";
import Footer from "./../components/footer/footer";
import Weather from "../components/weather/weather";

const DefaultLayout = (props) => {

    return (
        <div className="container aside-layout">
            <Header />
            <div className="aside-layout--content">
                <section className="aside-layout--content--main">{props.children}</section>
                <aside className="aside-layout--content--aside">
                    <Weather />
                </aside>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
