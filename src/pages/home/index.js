import React, { useState, useEffect } from "react"
import "./index.scss";

import Layout from "../../components/layouts";
import DollarRate from "../../components/dollar-rate";
import Article from "../../components/article";

import rates from "../../services/dollar-rate";
import news from "../../services/news";

import { Link } from "react-router-dom"

import useArticle from "../../context/article"

const Home = () => {

    const [dollarRates, setDollarRates] = useState([]);
    const [articles, setArticles] = useState([]);

    const { updateArticle } = useArticle()

    useEffect(() => {
        async function fetchData() {
            setDollarRates(rates())
            setArticles(await news())
        }
        fetchData()
    }, [])

    return (
        <Layout>
            <DollarRate rates={dollarRates} />
            <section className="news">
                <div className="news--grid">
                    {articles.map(article =>
                        <Link to="/articledetail" key={article.title + 1}>
                            <Article
                                title={article.title}
                                author={article.author}
                                description={article.description}
                                image={article.urlToImage}
                                content={article.content}

                                onClick={e => {
                                    updateArticle(article)
                                }}
                            />
                        </Link>)
                    }
                </div>
            </section>
        </Layout>
    );
}

export default Home;
