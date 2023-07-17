const Planets = require("../data");
const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
  const { id } = req.params;
  const planet = await axios.get(
    `http://database:8004/Planet/${id}` || `http://localhost:8004/Planet/${id}`
  );
  const { data } = planet.data;
  response(res, 200, data);
};
