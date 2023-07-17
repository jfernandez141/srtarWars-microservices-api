const Films = require("../data");
const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
  const { id } = req.params;
  const film = await axios.get(
    `http://database:8004/Film/${id}` || `http://localhost:8004/Film/${id}`
  );
  const { data } = film.data;
  response(res, 200, data);
};
