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

const APIRequest = (filter) => {
    let request = ""   
    filter ? request = new Request(BYTOPIC_URL + filter) : request = new Request(TOPHEADLINES_URL)
    return request
}

export default APIRequest