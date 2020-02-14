import axios from "axios";

export const createMessage = message => {
    return axios.post('/api/messages/', message);
};