import React, {useEffect, useState}from 'react';
import CardsList from '../components/CardsList';
import type { Article } from '../types/Article';
import getArticle  from '../api/getArticle';
import { Box } from '@mui/system';
import { CircularProgress, Typography } from '@mui/material';
import SearchInput from '../components/SearchComponent';
import SearchIcon from '../components/SearchIcon';

const MainPage = () => {
  const [data, setData] = useState<Article[]>([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const loadData = () => {
    setLoading(true);
    getArticle<Article[]>().then((response) => {
      setData(response);
      setLoading(false);
    }).catch(error => {
      console.log(error);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadData();
  }, []);
  
  const filtredList = data.filter(article => (
    article.title.toLowerCase().includes(query.toLowerCase()) || article.summary.toLowerCase().includes(query.toLowerCase())
  )).sort((a: Article, b:Article) => {
    if (a.title.toLowerCase().includes(query.toLowerCase()) && b.summary.toLowerCase().includes(query.toLowerCase())) {
      return -1;
    }
    return 1;
  });
  const counterArticle = filtredList.length;

  return (
    <Box
      width='100%'
      display='flex'
      minHeight='100vh'
      sx={{
        background: '#E5E5E5',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{
        width: {
          xs: '100%',
          sm: 760,
          lg: 1290,  
        },
        textAlign: {
          xs: 'center',
          sm: 'left',
          lg: 'left',  
        },
      }}>
        <Box
          sx={{
            paddingTop: '50px',
            paddingBottom: '40px',
            paddingRight: {
              xs: '25px',
              sm: '0px',
              md: '0px',
              lg: '0px',
            },
            paddingLeft: {
              xs: '25px',
              sm: '0px',
              md: '0px',
              lg: '0px',
            }
          }}
        >
          <Typography
            variant='h5' 
            component={'div'} 
            textAlign='left'
            paddingBottom='10px'
            fontWeight='600'
          >
            Filter by keywords
          </Typography>
          <SearchInput 
            sx={{
              width: {
                xs: '100%',
                sm: 500,
                md: 500,
                lg: 500,
              },
            }}
            placeholder='Search'
            startAdornment={<SearchIcon />}
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
        </Box>
        <Box
          sx={{
            paddingBottom: '45px',
          }}
        >
          {loading ? (
            <CircularProgress 
              color='secondary'
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%)',
              }}
            />
          ) : (
            <>
              <Box sx={{
                borderBottom: '1px solid black',
                paddingBottom: '5px',
              }}>
                <Typography
                  variant='h5' 
                  component={'div'} 
                  textAlign='left'
                  sx={{
                    paddingLeft: {
                      xs: '25px',
                      sm: '0px',
                      md: '0px',
                      lg: '0px',
                    },
                    fontWeight: '600',  
                  }}
                >
                  Results: {counterArticle}
                </Typography>
              </Box>
              <CardsList list={filtredList} query={query}/> 
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;