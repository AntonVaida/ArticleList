// import { Article } from '../types/Article';

async function getArticle<T>():Promise<T>{
  const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
  const result = await (response.json() as Promise<T>);
  return result;
}

export default getArticle;