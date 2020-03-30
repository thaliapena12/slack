import axios from "axios";

export const createMessage = message => {
    return axios.post('/api/messages', message);
};

export const getAllChannelMessages = channelId => {
    return axios.get(`/api/messages/channels/${channelId}`);
};

export const getAllDmgroupMessages = dmgroupId => {
    return axios.get(`/api/messages/dmgroups/${dmgroupId}`);
};