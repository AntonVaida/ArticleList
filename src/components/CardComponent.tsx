import React from 'react';
import {
  Card, 
  Box, 
  CardContent, 
  Typography, 
  CardMedia,
  Button,
} from '@mui/material';
import type { Article } from '../types/Article';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { formatData } from '../utils/formatData';
import { useNavigate} from 'react-router-dom';
import Hightligth from './Hightligth';
type Props = {
  article: Article,
  query: string,
}

const CardComponent:React.FC<Props> = ({article, query}) => {
  const {imageUrl, title, summary, publishedAt, id} = article;
  const navigate = useNavigate();

  const textLimit = (text: string) => {
    if (text.length <= 100) {
      return text;
    }

    return text.split(' ').reduce((res: string, char: string) => {
      if (res.length < 96) {
        return res + ' ' + char;
      }
      return res;
    }, '') + '...';
  };

  const data = formatData(publishedAt);
  const limitSummary = textLimit(summary);
  return (
    <Box sx={{width: {
      xs: '100%',
      sm: 350,
      md: 350,
      lg: 400,
    },
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
    }}>
      <Card>
        <CardMedia
          component={'img'}
          height= '217px'
          image={imageUrl}
        />
        <CardContent sx={{padding: '25px'}}>
          <Box sx={{
            paddingBottom: {
              xs: '15px',
              sm: '15px',
              md: '15px',
              lg: '25px',
            },
            opacity: '0.6',
          }} 
          display={'flex'} 
          alignItems={'center'}>
            <CalendarTodayIcon />
            <Typography 
              variant='body2' 
              sx={{
                paddingLeft: '10px',
              }}>
              {data}
            </Typography>
          </Box>
          <Typography 
            variant='h5' 
            component={'div'} 
            textAlign='left' 
            sx={{paddingBottom: {
              xs: '15px',
              sm: '15px',
              md: '15px',
              lg: '25px',
            },
            height: {
              xs: '140px',
              sm: '140px',
              md: '140px',
              lg: '125px',
            },
            fontSize: {
              xs: '20px',
              sm: '20px',
              md: '20px',
              lg: '24px',
            }}}>
            <Hightligth str={title} query={query} />
          </Typography>
          <Typography 
            variant='body2' 
            color='text.secondary' 
            textAlign='left'  
            sx={{paddingBottom: {
              xs: '15px',
              sm: '15px',
              md: '15px',
              lg: '25px',
            },
            minHeight: {
              xs: '91px',
              sm: '91px',
              md: '91px',
              lg: '70px',
            }}}>
            <Hightligth str={limitSummary} query={query} />
          </Typography>
          <Box textAlign={'start'}>
            <Button 
              variant="text" 
              endIcon={<ArrowForwardIcon/>}
              sx={{
                fontWeight: '700'
              }}
              onClick={() => navigate(`/:${id}`)}
            >
              Read More
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardComponent;