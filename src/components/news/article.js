import React from "react";
import "../../styles/styles.scss";

function Article({ firstArticleClass = "", title, author ="Anónimo", image, content, description }) {
    return (
        <article className={`article ${firstArticleClass}`}>
            <h3 className="article--title">
                {title}
            </h3>
            <p className="article--description">{description}</p>
            <figure>
                <img
                    src={image}
                    alt="article "
                    className="article--image"
                />
            </figure>
            <button className="article--button button button-secondary"> {author}</button>
            <p className="article--paragraph">
                {content}
            </p>
        </article>
    );
}

export default Article;
