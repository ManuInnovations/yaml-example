import 'countly-sdk-web';

const init = (key, url) => Countly.init({ app_key: key, url });

const trackEvent = (event, options) =>
  Countly.q.push([
    'add_event',
    {
      key: event,
      ...options,
    },
  ]);

export { init, trackEvent };
