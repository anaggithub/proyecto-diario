import React from "react";
import "./index.scss";
import Article from "./article";
import news from "../../services/news"

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      topic: ""
    }
  }

  async componentDidMount() {  
    this.setState({ articles: await news() })
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
