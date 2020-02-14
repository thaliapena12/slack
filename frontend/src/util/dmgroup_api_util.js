import axios from "axios";

export const getDmgroup = (dmgroupId) => {
  return axios.get(`/api/dmgroups/${dmgroupId}`);
};

export const deleteDmgroup = (dmgroupId) => {
  return axios.delete(`/api/dmgroups/${dmgroupId}`);
};

export const createDmgroup = (dmgroupData) => {
  return axios.post("/api/dmgroups/", dmgroupData);
};

export const getDmgroups = () => {
    return axios.get("/api/dmgroups/");
};


