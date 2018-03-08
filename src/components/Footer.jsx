import React from 'react';
import { withSiteData, Link } from 'react-static';
import styled from 'react-emotion';
import { map } from 'lodash';
import { Icons } from '../assets';
import content from '../content';
import colors from '../styles/colors';

const APP = content('app');

const Background = styled.div`
  background-color: ${colors.DARKBLUE};
  color: white;
  width: 100%;
  height: 80px;
  text-align: center;
  padding-top: 30px;
  @media (min-width: 576px) {
    height: 60px;
    font-size: 1.2em;
    padding-top: 20px;
  };
`;

const Footer = () => (
  <Background>
    {content('app.copyright')}
  </Background>
);

export default Footer;
