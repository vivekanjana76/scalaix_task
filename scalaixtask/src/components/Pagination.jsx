import React from 'react';
import { Pagination as MUIPagination } from '@mui/material';

const Pagination = ({ page, totalPages, onChange }) => {
  const handleChange = (event, value) => {
    onChange(value);
  };

  return (
    <MUIPagination
      count={totalPages}
      page={page}
      onChange={handleChange}
      variant="outlined"
      shape="rounded"
      color="primary"
    />
  );
};

export default Pagination;
