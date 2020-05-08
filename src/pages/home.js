import React, { useState, useEffect } from "react"
import Layout from "../components/layouts";
import DollarRate from "../components/dollar-rate";
import News from "../components/news";

import rates from "../services/dollar-rate";
import news from "../services/news";

const Home = () => {

    const [dollarRates, setDollarRates] = useState([]);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setDollarRates(rates())
    }, [])

    useEffect(() => {
        
        async function fetchData() {         
            setArticles(await news())
        }
        fetchData();

        // async function fetchData() {
        //     const res = await news()
        //     const newsArray = await res.json()
        //     console.log(newsArray.articles)
        //     setArticles(newsArray.articles)
        // }
        // fetchData();
    }, [])


    return (
        <Layout>
            <DollarRate rates={dollarRates} />
            <News articles={articles} />
        </Layout>
    );
}

export default Home;
