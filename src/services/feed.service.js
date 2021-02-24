import axios from '@/plugins/axios';
const getFeed = apiUrl => {
    return axios.get(apiUrl);
};
export default {
    getFeed,
};
