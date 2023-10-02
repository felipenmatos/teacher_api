const express = require("express");
const controllers = require("../controllers/controllers");

const router = express();

router.get("/professores", controllers.consultTeachers);
router.get(
  "/professores/:idConsultado",
  controllers.consult_a_Teacher
);
router.post("/professores", controllers.register_a_Teacher);
router.patch(
  "/professores/:idConsultado",
  controllers.edit_Teacher
);
router.put(
  "/professores/:idConsultato",
  controllers.replace_or_create
);
router.delete(
  "/professores/:idConsultado",
  controllers.deleteRegistration
);

module.exports = router;
