import axios from "axios";

export const getChannels = () => {
  return axios.get("/api/channels/");
};

export const getChannel = (channelId) => {
  return axios.get("/api/channels/${channelId}");
};

export const deleteChannel = (channelId) => {
  return axios.delete("/api/channels/${channelId}");
};

export const createChannel = (channelData) => {
  return axios.post("/api/channels/", channelData);
};

export const getUserChannels = userId => {
  return axios.get(`api/channels/user/:${userId}`);
};

