const Planets = require("../data");
const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
  const planets = await axios.get(
    "http://database:8004/Planet" || `http://localhost:8004/Planet`
  );
  const { data } = planets.data;
  return response(res, 200, data);
};
