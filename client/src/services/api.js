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

export const newsApiBR = newsapi.v2.everything({
        sources: 'bleacher-report',
        language: 'en'
      });

export const newsApiFox = newsapi.v2.everything({
        sources: 'fox-sports',
        language: 'en'
      });

export const newsApiNFL = newsapi.v2.everything({
        sources: 'nfl-news',
        language: 'en'
      });

export const newsApiNHL = newsapi.v2.everything({
        sources: 'nhl-news',
        language: 'en'
      });

export const newsApiTalkSport = newsapi.v2.everything({
        sources: 'talksport',
        language: 'en'
      });

export const newsApiSportBible = newsapi.v2.topHeadlines({
        sources: 'the-sport-bible',
        language: 'en'
      });

export const newsApiBBC = newsapi.v2.everything({
        sources: 'bbc-sport',
        language: 'en'
      });

export const favorites = (team) => {
  return newsapi.v2.everything({
        q: `${team}`,
        language: 'en'
      });
}




