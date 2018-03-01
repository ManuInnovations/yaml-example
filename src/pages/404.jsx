import React from 'react';
import content from '../content';
import { Images } from '../assets';


export default () => (
  <div style={{ minHeight: 'calc(100vh - 200px)' }}>
    <h1>{content('pages.error.text')}</h1>
    <img src={Images.sorry} />
  </div>
);
