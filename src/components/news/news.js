import React from "react";
import "../../styles/styles.scss";
import Article from "./article";

const APIKEY = "6bdbaae94d6944cbb68a55fcda4e5bea"
const URL = 'http://newsapi.org/v2/top-headlines?' +
  'country=ar&' +
  'apiKey=' + APIKEY
const REQ = new Request(URL)

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  async componentDidMount() {
    const res = await fetch(REQ)
    const data = await res.json()
    this.setState({ articles: data.articles })
    console.log(this.state.articles)
  }

  render() {
    return (
      <section className="news">
        <div className="news--grid">
          {this.state.articles.map(article => <Article title={article.title} author={article.author} description={article.description} image={article.urlToImage} content={article.content} key={article.title + 1} />)}

        </div>
      </section>
    )
  }
}

export default News;
