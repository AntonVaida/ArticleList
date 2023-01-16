import React from 'react';
import type { Article } from '../types/Article';
import { Box } from '@mui/system';
import CardComponent from './CardComponent';
import { Grid } from '@mui/material';

type Props = {
    list: Article[],
    query: string,
}

const CardsList:React.FC<Props> = ({list, query}) => {
  return (
    <Box>
      <Grid 
        container 
        sx={{
          width: '100%',
          paddingTop: {xs: '30px', sm: '30px', lg: '45px'}
        }}
        spacing={{ xs: '30px', sm: '30px', lg: '45px' }} 
        columns={{ xs: 1, sm: 12, lg: 12 }}
      >
        {!!list.length && list.map(article => (
          <Grid item  key={article.id}  sm={6} md={4}>
            <CardComponent article={article} query={query} />
          </Grid>
        ))
        }
      </Grid>
    </Box>
  );
};

export default CardsList;