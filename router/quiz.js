const anticoController = require("../controllers/quiz-antico");
const router = require("express").Router();

router.post("/", anticoController.create);
router.get("/", anticoController.getAll);
router.get("/:id", anticoController.findOne);
router.put("/:id", anticoController.update);
router.delete("/:id", anticoController.delete);
router.get("/categoryId/:id", anticoController.getByCategoryId);

module.exports = router;
