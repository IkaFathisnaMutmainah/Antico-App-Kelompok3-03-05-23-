const anticoController = require("../controllers/MateriController");
const router = require("express").Router();

router.post("/", anticoController.createMateri);
router.get("/", anticoController.getAllMateri);
router.get("/:id", anticoController.findOne);
router.put("/:id", anticoController.updateMateri);
router.delete("/:id", anticoController.deleteMateri);
router.get("/categorypurba/:id", anticoController.getByMateriId);
router.get("/categorytahapan/:id", anticoController.getByMateriId);

module.exports = router;
