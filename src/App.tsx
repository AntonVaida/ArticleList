
import React from 'react';
import type {} from '@mui/lab/themeAugmentation';
import MainPage from './pages/main';
import { Box } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import DetaitArticle from './pages/DetaitArticle';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/:articleId' element={<DetaitArticle />} />
      </Routes>
    </Box>
  );
}

export default App;
