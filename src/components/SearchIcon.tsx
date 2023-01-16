import { Search } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const SearchIcon = styled(Search, {  
  name: 'SearchInput',
  slot: 'Wrapper',})({
  paddingRight: '20px',
});

export default SearchIcon;