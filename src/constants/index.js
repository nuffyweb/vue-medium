const config = {
    apiUrl: 'http://localhost:7000',
};
const feedUrl = {
    base: '/articles',
    user: '/feed?limit=10&offset=0',
    global: '?limit=10&offset=0',
    tag: '?limit=10&offset=0&tag=',
};
export {config, feedUrl};
