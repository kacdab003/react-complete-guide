import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://kacper-burgerbuilder.firebaseio.com/',
});

export default instance;