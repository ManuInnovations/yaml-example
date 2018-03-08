import React from 'react';
import { withSiteData } from 'react-static';
import styled from 'react-emotion';
import Landing from '../components/home/Landing';
import Support from '../components/home/Support';
import Features from '../components/home/Features';

export default withSiteData(() => (
  <div>
    <Landing />
    <Support />
    <Features />
  </div>
));
