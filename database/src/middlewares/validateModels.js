const { clientError } = require("../utils");

module.exports = (req, res, next) => {
  const { model } = req.params;
  if (["Character", "Film", "Planet"].includes(model)) {
    next();
  } else {
    throw new clientError(`Invalid model: ${model}`, 400);
  }
};
