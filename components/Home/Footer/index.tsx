// components/Footer.tsx
import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ p: 3, backgroundColor: '#f8f8f8' }}>
      <Typography variant="body1" color="text.secondary" align="center">
        © 2022 My Website
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <IconButton color="primary">
          <Link href="https://www.facebook.com" target="_blank">
            <Facebook />
          </Link>
        </IconButton>
        <IconButton color="primary">
          <Link href="https://www.instagram.com" target="_blank">
            <Instagram />
          </Link>
        </IconButton>
        <IconButton color="primary">
          <Link href="https://www.twitter.com" target="_blank">
            <Twitter />
          </Link>
        </IconButton>
        <IconButton color="primary">
          <Link href="https://www.linkedin.com" target="_blank">
            <LinkedIn />
          </Link>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;