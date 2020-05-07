import newsMock from './mock.json';

const APIKEY = "6bdbaae94d6944cbb68a55fcda4e5bea"
const TOPHEADLINES_URL = 'http://newsapi.org/v2/top-headlines?' +
    'country=ar' +
    '&apiKey=' + APIKEY +
    '&pageSize=23'
const BYTOPIC_URL = 'http://newsapi.org/v2/everything?' +
    'language=es' +
    '&apiKey=' + APIKEY +
    '&pageSize=23' +
    '&q='

const callFetch = async (filter) => {
    let request = ""
    filter ? request = new Request(BYTOPIC_URL + filter) : request = new Request(TOPHEADLINES_URL)
    const res = await fetch(request)
    const data = await res.json()
    console.log(data.articles)
    return data.articles
}

const news = () => {
    console.log(process.env.REACT_APP_MOCK)
    return process.env.REACT_APP_MOCK ===true? newsMock : callFetch();    
};

export default news