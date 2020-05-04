import React from "react";
import "../../styles/styles.scss";

const Article = ({ firstArticleClass = "", title, author = "Anónimo", image, content, description }) => {
    return (
        <article className={`article ${firstArticleClass}`}>
            <h3 className="article--title">
                {title.substring(0, 80)}
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
