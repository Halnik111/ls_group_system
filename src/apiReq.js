
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

const apiReq = async (endpoint, options = {}) => {
    const url = `${BASE_URL}${endpoint}`;
    return fetch(url, options);
};

export default apiReq;