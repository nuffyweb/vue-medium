import axios from '@/plugins/axios';
const getCurrentUser = () => {
    return axios.get('/user');
};
export default {
    getCurrentUser,
};
