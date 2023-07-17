const { Router } = require("express");
const { validateModels, validateBody } = require("../middlewares");
const contollers = require("../controllers");

const router = Router();

router.get("/:model", validateModels, contollers.getController);

router.get("/:model/:id", validateModels, contollers.getByIdController);

router.post("/:model", validateModels, validateBody, contollers.postController);

router.put("/:model/:id", validateModels, validateBody, contollers.putController);

router.delete("/:model/:id", validateModels, contollers.deleteController);

module.exports = router;
