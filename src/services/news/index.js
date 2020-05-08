import newsMock from './mock.json';
import config from "../../config"

const { KEY, HOST } = config.API_NEWS

const TOPHEADLINES_URL = HOST + 'top-headlines?country=ar&apiKey=' + KEY + '&pageSize=23'
const BYTOPIC_URL = HOST + 'everything?language=es&apiKey=' + KEY + '&pageSize=23&q='

const callFetch = async (topic) => {
    let request = ""
    topic ? request = new Request(BYTOPIC_URL + topic) : request = new Request(TOPHEADLINES_URL)
    const res = await fetch(request)
    const articles = await res.json()
    console.log(articles.articles)
    return articles.articles
}

const news = (topic) => {
    //  console.log(process.env.REACT_APP_MOCK, typeof process.env.REACT_APP_MOCK )
    return process.env.REACT_APP_MOCK === "true" ? newsMock : callFetch(topic);
};

export default news