// components/Pricing.tsx
import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { PriceContent } from './style';
import { useRouter } from 'next/navigation';

const plans = [
  { name: 'Free', price: '$0', features: ['Feature 1', 'Feature 2'] },
  { name: 'Individual', price: '$10', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
  { name: 'Team', price: '$40', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] },
];

const Pricing = () => {

    const router = useRouter();

    const handleSelect = () => {
        router.push('/editor');
    };

  return (
    <Grid container spacing={4}>
      {plans.map((plan, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{height: "100%"}}>
            <PriceContent>
              <Typography variant="h5" component="div">
                {plan.name}
              </Typography>
              <Typography variant="h4" component="div">
                {plan.price}
              </Typography>
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <Typography variant="body1">
                      {feature}
                    </Typography>
                  </li>
                ))}
              </ul>
              <Button variant="contained" color="primary" onClick={handleSelect}>
                Select
              </Button>
            </PriceContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Pricing;