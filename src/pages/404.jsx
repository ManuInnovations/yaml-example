import React from 'react';
import content from '../content';

export default () => (
  <div style={{ minHeight: 'calc(100vh - 220px)' }}>
    <h1>{content('pages.error.text')}</h1>
  </div>
);
