import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, CardMedia} from '@mui/material';
import { useParams } from 'react-router-dom';
import type { Article } from '../types/Article';
import { useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Lorem from '../api/LoremIpsum';
import getArticleById from '../api/getArticleById';


const DetaitArticle = () => {
  const [article, setArticle] = useState<Article>();
  const { articleId } = useParams();
  const navigate = useNavigate();

  const loadArticle = () => {
    if (articleId) {
      getArticleById<Article>(articleId?.slice(1, articleId.length)).then((response) => {
        setArticle(response);
      }).catch(error => console.log(error));
    }
  };

  useEffect(() => {
    loadArticle();
  }, []);

  return (
    <Box
      width='100%'
      minHeight='100vh'
      sx={{
        position: 'relative',
        background: '#E5E5E5',
      }}
    >
      <CardMedia
        component={'img'}
        height= '245px'
        width='100%'
        image={article?.imageUrl}
      />
      <Box
        boxSizing='border-box'
        sx={{
          width: {
            xs: '100%',
            sm: 760,
            lg: 1290,
          },
          margin: '0 auto',
          transform: 'translateY(-95px)',
        }}
      >
        <Box
          sx={{
            paddingTop: '35px',
            paddingBottom: '50px',
            paddingRight: '75px',
            paddingLeft: '75px',
            border: '1px solid #EAEAEA',
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
            borderRadius: '5px',
            background: '#FFFFFF',
          }}
        >
          <Typography
            variant='h5' 
            component={'div'} 
            textAlign='center'
            sx={{
              fontSize: {
                xs: '20px',
                sm: '20px',
                md: '20px',
                lg: '24px',
              },
              paddingBottom: {
                xs: '30px',
                sm: '30px',
                md: '40px',
                lg: '50px',
              },
            }}
          >
            {article?.title}
          </Typography>
          <Typography
            component={'div'} 
            variant='body2' 
            color='text.secondary' 
            textAlign='left' 
          >
            {article?.summary}
            {Lorem}
          </Typography>
        </Box>
        <Button
          onClick={() => navigate('/')}
          variant="text" 
          startIcon={<ArrowBackIcon/>}
          sx={{
            fontWeight: '700',
            marginTop: '35px',
            marginLeft: '75px',
          }}
        >
          Back to homepage
        </Button>
      </Box>
    </Box>
  );
};

export default DetaitArticle;