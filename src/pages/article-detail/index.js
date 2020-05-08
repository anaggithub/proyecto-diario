import React, { useState, useEffect } from "react"
import { LayoutNews } from "../../components/layouts";
import "./index.scss";

import news from "../../services/news";

const ArticleDetail = () => {

    const [article, setArticle] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const articles = await news("cine")
            const firstArt = articles[0]
            setArticle(firstArt)
        }
        fetchData();
    }, [])


    return (
        <LayoutNews>
            <article className="article-detail">
                <h3 className="article-detail--title">
                    {article.title}
                </h3>
                <p className="article-detail--description">{article.description}</p>
                <figure>
                    <img
                        src={article.urlToImage}
                        alt="article-detail "
                        className="article-detail--image"
                    />
                </figure>
                <h4 className="article-detail--autor">Por {article.author || "Anonimo"}</h4>
                <p className="article-detail--content">
                    {article.content}
                </p>
            </article>

        </LayoutNews>
    );
}


export default ArticleDetail;
