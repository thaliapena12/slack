import axios from "axios";

export const getUserChannels = userId => {
  return axios.get(`/api/users/${userId}/channels/`);
};

export const getUserDmgroups = userId => {
  return axios.get(`/api/users/${userId}/dmgroups/`);
};

export const getUserList = userArray => {
  return axios.post(`api/users/userlist`, {userArray});
};


