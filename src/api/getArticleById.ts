async function getArticleById<T>(id:string):Promise<T>{
  const response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`);
  const result = await (response.json() as Promise<T>);
  return result;
}

export default getArticleById;