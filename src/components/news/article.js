import React from "react";
import "./article.scss";
// podría ir (props), luego debajo colocar const {image, description} = props, o props.image, props.description 
// porque props es un objeto!! Entonces se puede desestructurar

const Article = ({ firstArticleClass = "", title, description, author, image}) => {

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
            <button className="article--button button button-secondary"> {author || "Anonimo"}</button>
        </article>
    );
}

export default Article;
