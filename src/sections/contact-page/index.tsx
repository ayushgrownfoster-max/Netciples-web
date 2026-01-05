'use client';
 
import React from 'react';
import dynamic from 'next/dynamic';

import ContactSection from './header-section';
import ContactInfoSection from './contact-info-section';

const MapComponent = dynamic(() => import('./map-component-section'), { ssr: false });

const ContactPage = () => (
  <>
    <ContactSection />
    <ContactInfoSection />
    <MapComponent />
  </>
);

export default ContactPage;
