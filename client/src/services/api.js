// import axios from 'axios';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.REACT_APP_NEWSAPI_KEY);


export const newsApiAll = newsapi.v2.topHeadlines({
        category: 'sports',
        language: 'en',
        country: 'us'
      });

export const newsApiESPN = newsapi.v2.topHeadlines({
        sources: 'espn',
        language: 'en'
      });

// axios.get(`https://newsapi.org/v2/everything?sources=espn&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`)


