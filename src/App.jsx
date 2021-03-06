import React from 'react';
import { Router } from 'react-static';
import Routes from 'react-static-routes'; // eslint-disable-line
import styled from 'react-emotion';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './styles/main.css';
import { init as initAnalytics, trackLinks, trackSessions, trackPageview, trackFormsubmit, trackConversions } from './analytics';

const API_KEY = '084f7619004822cdbe3a3964fcef826ff75a226e';
const API_URL = 'https://analytics.typayroll.co.nz/';

initAnalytics(API_KEY, API_URL);
trackLinks();
trackSessions();
trackPageview();
trackFormsubmit();
trackConversions();

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  margin: 0;
  padding: 0;
`;

export default () => (
  <Router>
    <Container>
      <Nav />
      <Routes />
      <Footer />
    </Container>
  </Router>
);
