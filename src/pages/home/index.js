import React, { useState, useEffect } from "react"
import "./index.scss";

import Layout from "../../components/layouts";
import DollarRate from "../../components/dollar-rate";
import Article from "../../components/article";

import rates from "../../services/dollar-rate";
import news from "../../services/news";

const Home = () => {

    const [dollarRates, setDollarRates] = useState([]);
    const [articles, setArticles] = useState([]);

    useEffect(async () => {
        setDollarRates(rates())
        setArticles(await news())
        console.log(articles)
    }, [])

    return (
        <Layout>
            <DollarRate rates={dollarRates} />
            <section className="news">
                <div className="news--grid">
                    {articles.map(article =>
                        <Article
                            title={article.title}
                            author={article.author}
                            description={article.description}
                            image={article.urlToImage}
                            content={article.content}
                            key={article.title + 1} />)}
                </div>
            </section>
        </Layout>
    );
}

export default Home;
