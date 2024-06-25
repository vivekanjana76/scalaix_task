import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getImageDetails } from '../services/api';
import { Button, Container, Typography } from '@mui/material';

const ImageDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  useEffect(() => {
    getImageDetails(id).then(response => {
      setImage(response.data);
    }).catch(error => console.error(error));
  }, [id]);

  if (!image) return null;

  return (
    <Container>
      <Button onClick={() => navigate('/')}>Back</Button>
      <Typography variant="h1" className="Text-headline">{image.alt_description}</Typography>
      <img src={image.urls.regular} alt={image.alt_description} style={{ width: '100%' }} />
      <Typography variant="body1" paragraph className="Text-Normal">
        {image.description}
      </Typography>
      <Typography variant="body1" color="textSecondary" className="Text-Normal">
        By {image.user.name} ({image.user.username})
      </Typography>
      <Typography variant="body1" color="textSecondary" className="Text-Normal">
        {image.likes} likes
      </Typography>
    </Container>
  );
};

export default ImageDetailsPage;
