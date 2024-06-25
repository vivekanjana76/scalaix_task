import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ value, onChange }) => (
  <TextField
    value={value}
    onChange={onChange}
    variant="outlined"
    fullWidth
    margin="normal"
    placeholder="Search"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
  />
);

export default SearchBar;
