import React from "react"
import "./../styles/styles.scss";
import Header from "./../components/header/header";
import DollarRate from "./../components/dollar-rate/dollar-rate";
import News from "./../components/news/news";
import Footer from "./../components/footer/footer";

const Home = () => {

    return (
        <div className="container">
            <Header />
            <DollarRate />
            <News />
            <Footer />
        </div>
    );
}

export default Home;
