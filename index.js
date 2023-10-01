const express = require("express");
const controllers = require("./controllers/controllers");

const app = express();
app.use(express.json());

app.get("/professores", controllers.consultTeachers);
app.get(
  "/professores/:idConsultado",
  controllers.consult_a_Teacher
);
app.post("/professores", controllers.register_a_Teacher);
app.patch(
  "/professores/:idConsultado",
  controllers.edit_Teacher
);
app.put(
  "/professores/:idConsultato",
  controllers.replace_or_create
);
app.delete(
  "/professores/:idConsultado",
  controllers.deleteRegistration
);

app.listen(8000);
