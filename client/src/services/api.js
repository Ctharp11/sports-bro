// import axios from 'axios';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.REACT_APP_NEWSAPI_KEY);


export const newsApiAll = newsapi.v2.topHeadlines({
        category: 'sports',
        language: 'en',
        country: 'us'
      })


export const newApiESPN = () => {
    // https://newsapi.org/v2/top-headlines?sources=espn&apiKey=API_KEY
}
