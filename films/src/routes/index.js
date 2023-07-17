const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();


router.get("/films", controllers.getFilms);
router.get("/films/:id", controllers.filmById);


module.exports = router;
