const { ANALYTICS_KEY, ANALYTICS_URL } = process.env;

const config = {
    analytics: {
        apiKey: ANALYTICS_KEY,
        url: ANALYTICS_URL
    }
};

export default config;