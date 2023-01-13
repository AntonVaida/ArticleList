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

const CardComponent:React.FC<Article> = (article) => {
  const {imageUrl, title, summary, publishedAt} = article;

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
      sm: 300,
      md: 400,
      lg: 400,
    }}}>
      <Card>
        <CardMedia
          component={'img'}
          height= '217'
          image={imageUrl}
        />
        <CardContent sx={{padding: '25px'}}>
          <Box sx={{paddingBottom: {
            xs: '15px',
            sm: '15px',
            md: '25px',
            lg: '25px',
          }}} 
          display={'flex'} 
          alignItems={'center'}>
            <CalendarTodayIcon />
            <Typography variant='body2' sx={{paddingLeft: '10px'}}>
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
              md: '25px',
              lg: '25px',
            }}}>
            {title}
          </Typography>
          <Typography 
            variant='body2' 
            color='text.secondary' 
            textAlign='left'  
            sx={{paddingBottom: {
              xs: '15px',
              sm: '15px',
              md: '25px',
              lg: '25px',
            }}}>
            {limitSummary}
          </Typography>
          <Box textAlign={'start'}>
            <Button variant="text" endIcon={<ArrowForwardIcon/>}>Read More</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardComponent;