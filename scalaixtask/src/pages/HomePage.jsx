import React, { useState, useEffect } from 'react';
import { searchImages } from '../services/api';
import ImageCard from '../components/ImageCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import { Grid, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    // Set a default search query if none is provided
    const defaultQuery = query || 'nature';

    searchImages(defaultQuery, page).then(response => {
      setImages(response.data.results);
      setTotalPages(response.data.total_pages);
    }).catch(error => console.error(error));
  }, [query, page]);

  return (
    <Container>
      <Typography variant="h1" align="center" className="Text-headline">Image Search</Typography>
      <SearchBar value={query} onChange={e => setQuery(e.target.value)} />
      <Grid container spacing={2}>
        {images.map(image => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <ImageCard image={image} onClick={() => navigate(`/details/${image.id}`)} />
          </Grid>
        ))}
      </Grid>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </Container>
  );
};

export default HomePage;
