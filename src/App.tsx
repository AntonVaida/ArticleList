
import React, {useEffect, useState} from 'react';
import './App.css';
import type {} from '@mui/lab/themeAugmentation';
import getArticle from './utils/getArticle';
import type  { Article } from './types/Article';
import CardComponent from './components/CardComponent';

function App() {
  const [data, setData] = useState<Article[]>([]);

  const loadData = () => {
    getArticle<Article[]>().then((response) => {
      setData(response);
    }).catch(error => console.log(error));
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <div>Peremoga</div>
        {data.length && data.map(article => (
          <CardComponent {...article} key={article.id} />
        ))}
      </header>
    </div>
  );
}

export default App;
