const { clientError } = require("../utils");

module.exports = (req, res, next) => {
  const { id } = req.params;
  if (isNaN(id)) throw new clientError(`invalid id`);
  next();
};
