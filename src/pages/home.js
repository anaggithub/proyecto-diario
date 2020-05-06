import React from "react"
import "./../styles/styles.scss";
import DefaultLayout from "./../layouts/default-layout"
import DollarRate from "../components/dollar-rate/dollar-rate";
import Rates from "../components/dollar-rate/rates";
import News from "../components/news/news";

const Home = () => {

    return (
        <DefaultLayout>
            <DollarRate rates={Rates}/>
            <News />
        </DefaultLayout>
    );
}

export default Home;