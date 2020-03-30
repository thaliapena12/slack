import axios from "axios";

export const getChannels = () => {
  return axios.get("/api/channels/");
};

export const getChannel = (channelId) => {
  return axios.get(`/api/channels/${channelId}`);
};

export const deleteChannel = (channelId) => {
  return axios.delete(`/api/channels/${channelId}`);
};

export const createChannel = (channelData) => {
  return axios.post("/api/channels/", channelData);
};

export const getUserCreatedChannels = userId => {
  return axios.get(`api/channels/user/${userId}`);
};

export const addUserToChannel = data => {
  return axios.post(`api/channels/${data.channelId}/addUser`, data);
}