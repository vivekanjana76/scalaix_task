import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const ImageCard = ({ image, onClick }) => (
  <Card onClick={onClick} style={{ cursor: 'pointer' }}>
    <CardMedia
      component="img"
      height="200"
      image={image.urls.small}
      alt={image.alt_description}
    />
    <CardContent>
      <Typography variant="h6">{image.alt_description}</Typography>
      <Typography variant="body1" color="textSecondary">
        By {image.user.name}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {image.likes} likes
      </Typography>
    </CardContent>
  </Card>
);

export default ImageCard;
