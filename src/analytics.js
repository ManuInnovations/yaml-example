import 'countly-sdk-web';

const init = (key, url) => Countly.init({ app_key: key, url });

// custom events
const trackEvent = (event, options) =>
  Countly.q.push([
    'add_event',
    {
      key: event,
      ...options,
    },
  ]);

// Countly events
const trackLinks = () => Countly.q.push(['track_links']);
const trackSessions = () => Countly.q.push(['track_sessions']);
const trackPageview = () => Countly.q.push(['track_pageview']);
const trackFormsubmit = () => Countly.q.push(['track_forms']);
const trackConversions = () => Countly.q.push(['report_conversion']);

export {
  init,
  trackEvent,
  trackLinks,
  trackSessions,
  trackPageview,
  trackFormsubmit,
  trackConversions,
};
