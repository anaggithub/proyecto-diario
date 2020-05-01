import React from "react";
import "../../styles/styles.scss";

function Article({ firstArticleClass = "", title, image, content }) {
    return (
        <article className={`article ${firstArticleClass}`}>
            <h1 className="article--title">
                {title}
            </h1>
            <figure>
                <img
                    src={image}
                    alt="article "
                    className="article--image"
                />
            </figure>
            {/* <button className="article--button button--primary">{autor}</button> */}
            <p className="article--paragraph">
                {content}
            </p>
        </article>
    );
}

export default Article;
