import React from "react"
import { LayoutNews } from "../../components/layouts";
import "./index.scss";

import useArticle from "../../context/article"

const ArticleDetail = () => {

    const { article } = useArticle()

    return (
        <LayoutNews>
            <article className="article-detail">
                <h3 className="article-detail--title">
                    {article.title}
                </h3>
                <p className="article-detail--description">
                    {article.description}
                </p>
                <figure>
                    <img
                        src={article.urlToImage}
                        alt="article-detail "
                        className="article-detail--image"
                    />
                </figure>
                <h4 className="article-detail--autor">
                    {article.author}
                </h4>
                <p className="article-detail--content">
                    {article.content}
                </p>
            </article>

        </LayoutNews>
    );
}


export default ArticleDetail;
