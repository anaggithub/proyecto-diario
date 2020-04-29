import React from "react";
import "../styles/styles.scss";
import Article from "./article";

function News() {
  return (
    <section className="news">
      <div className="news--grid">
        <Article firstArticleClass="first-article"/>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </section>
  );
}

export default News;
