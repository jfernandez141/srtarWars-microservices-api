const store = require("../data");
const { response, clientError } = require("../utils");

module.exports = async (req, res) => {
  const { model, id } = req.params;
  const { body } = req;
  const data = await store[model].updateById(id, { ...body });
  return response(res, 200, data);
};
