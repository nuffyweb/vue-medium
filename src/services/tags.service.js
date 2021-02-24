import axios from '@/plugins/axios';
const getTags = () => {
    return axios.get('tags');
};
export default {
    getTags,
};
