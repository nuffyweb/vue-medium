import axios from '@/plugins/axios';
const register = credential => {
    return axios.post('/users', {user: credential});
};
const login = credential => {
    return axios.post('/users/login', {user: credential});
};
export default {
    register,
    login,
};
