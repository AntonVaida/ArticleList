import { InputBase, styled } from '@mui/material';


const SearchInput = styled(InputBase, {
  name: 'SearchInput',
  slot: 'Wrapper',
})({
  height: 50,
  backgroundColor: '#fff',
  borderRadius: 0,
  border: '1px solid #EAEAEA',
  padding: '20px',
  fontSize: '16px',
  adornedStart: {
    '& > *:first-child': {
      fontSize: 20,
      color: 'black',
    },
  }
});


export default SearchInput;