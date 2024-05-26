// components/Features.tsx
import React from 'react';
import { Grid, Card, Typography } from '@mui/material';
import { CardContent } from './styles';


const features = [
    { name: 'React', icon: <span /> },
    { name: 'Angular', icon: <span /> },
    { name: 'JavaScript', icon: <span /> },
    { name: 'Node.js', icon: <span /> },
];

const Features = () => {
  return (
    <Grid container spacing={4}>
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{height: "100%"}}>
            <CardContent>
              <Typography variant="h5" component="div">
                {feature.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Features;