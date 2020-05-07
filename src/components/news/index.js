import React from "react";
import "./index.scss";
import Article from "./article";
import APIRequest from "../../services/news"

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      topic : ""
    }
  }

  async componentDidMount() {
    //const res = await fetch(APIRequest("musica"))
    const res = await fetch(APIRequest())
    const data = await res.json()
    this.setState({ articles: data.articles })
    console.log(this.state.articles)
  }

  render() {
    return (
      <section className="news">
        <div className="news--grid">
          {this.state.articles.map(article =>
            <Article
              title={article.title}
              author={article.author}            
              description={article.description}
              image={article.urlToImage}
              content={article.content}
              key={article.title + 1} />)}
        </div>
      </section>
    )
  }
}

export default News;
