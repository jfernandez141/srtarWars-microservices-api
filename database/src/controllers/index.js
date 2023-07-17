const { catchedErrors } = require("../utils");

module.exports = {
  getController: catchedErrors(require("./getController")),
  getByIdController: catchedErrors(require("./getByIdController")),
  postController: catchedErrors(require("./postController")),
  putController: catchedErrors(require("./putController")),
  deleteController: catchedErrors(require("./deleteController")),
};
