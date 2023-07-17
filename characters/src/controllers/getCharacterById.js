const Characters = require("../data");
const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
  const { id } = req.params;
  const character = await axios.get(
    `http://database:8004/Character/${id}` ||
      `http://localhost:8004/Character/${id}`
  );
  const { data } = character.data;
  response(res, 200, data);
};
