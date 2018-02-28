import React from 'react';
import { Router } from 'react-static';
import Routes from 'react-static-routes'; // eslint-disable-line
import $ from 'jquery';
import Countly from 'countly-sdk-web';
import styled from 'react-emotion';
import Nav from './components/Nav';
import './styles/main.css';

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

class App extends React.Component {
  componentWillMount() {
    console.log('Countly script is here!')

    var embedCode = `
    <script type='text/javascript'>
      {/* some default pre init */}
      var Countly = Countly || {};
      Countly.q = Countly.q || [];
      
      {/* provide your app key that you retrieved from Countly dashboard */}
      Countly.app_key = "YOUR_APP_KEY";
      
      {/* provide your server IP or name. Use try.count.ly for EE trial server. */}
      {/* if you use your own server, make sure you have https enabled if you use
      https below. */}
      Countly.url = "https://yourdomain.com"; 
      
      {/* start pushing function calls to queue
      track sessions automatically */}
      Countly.q.push(['track_sessions']);
        
      {/* track sessions automatically */}
      Countly.q.push(['track_pageview']);
        
      {/* load countly script asynchronously */}
      (function() {
        var cly = document.createElement('script'); cly.type = 'text/javascript'; 
        cly.async = true;
        // enter url of script here (see below for other option)
        cly.src = 'https://cdn.jsdelivr.net/npm/countly-sdk-web@latest/lib/countly.min.js';
        cly.onload = function(){Countly.init()};
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(cly, s);
      })();
    </script>`
    $('.main').append(embedCode);
  }
  render() {
    return (
      <Router>
        <Container className='main'>
          <Nav />
          <Routes />
        </Container>
      </Router>
    )
  }
}

export default App;
