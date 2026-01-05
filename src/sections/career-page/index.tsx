'use client';

import React from 'react';

import CurrentOpenings from './current-openings-section';
import LifeAtNetciples from './life-at-netciples-section';
import CareerSummarySection from './career-summary-section';

const CareerDetailsPage = () => (
  <div className='tw:scroll-smooth'>
    <CareerSummarySection />
    <LifeAtNetciples />
    <CurrentOpenings />
  </div>
);

export default CareerDetailsPage;
