import React from 'react';
import { Pagination } from '@mui/material';

//Styles
import { PagWrapper } from './Styles';

export default function Pages({total, catsPerPage, paginate}) {
  const count = Math.ceil(total / catsPerPage);

  const handleChange = (e, p) => {
    paginate(p);
  };

  return (
    <PagWrapper container justifyContent="center">
      <Pagination 
        count={count}
        onChange={handleChange}
      />
    </PagWrapper>
  )
}
