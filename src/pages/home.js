import React, { useState, useEffect } from "react"
import "./../styles/styles.scss";
import Layout from "../components/layouts";
import DollarRate from "../components/dollar-rate";
import News from "../components/news";

import rates from "../services/dollar-rate";

const Home = () => {

    const [dollarRates, setDollarRates] = useState([]);

    useEffect(() => {
        setDollarRates(rates())
    }, [])

    return (
        <Layout>
            <DollarRate rates={dollarRates} />
            <News />
        </Layout>
    );
}

export default Home;
