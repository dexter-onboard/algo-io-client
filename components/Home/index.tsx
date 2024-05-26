"use client"

// components/Homepage.tsx
import React from 'react';
import Header from './Header';
import Features from './Features';
import Pricing from './Pricing';
import Footer from './Footer';
import FlexBox from './styles';

const Homepage = () => {
  return (
    <FlexBox>
      <Header />
      <Features />
      <Pricing />
      <Footer />
    </FlexBox>
  );
};

export default Homepage;