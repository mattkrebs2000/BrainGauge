import axios from "axios";

export default {
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },

  getUsers: function () {
    return axios.get("/api/users");
  },

  login: function (user) {
    return axios.post("/api/users/login", user);
  },

  performancedata: function () {
    return axios.get("/api/data/performance");
  },

  surveydata: function () {
    return axios.get("/api/data/survey")
  },
};


