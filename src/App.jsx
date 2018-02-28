import React from 'react';
import { Router } from 'react-static';
import Routes from 'react-static-routes'; // eslint-disable-line
import styled from 'react-emotion';
import Nav from './components/Nav';
import './styles/main.css';
import { init as initAnalytics } from './analytics';

const API_KEY = 'YOUR_API_KEY';
const API_URL = 'http://analytics.typayroll.co.nz';
initAnalytics(API_KEY, API_URL);

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
    </Container>
  </Router>
);
