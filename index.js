const express = require("express");

const app = express();

app.use(express.json());

const list_teachers = [
  {
    id: 1,
    nome: "Amanda da Conceição",
    turno: "Vespertino",
    materia: "Português",
  },
  {
    id: 2,
    nome: "Talita Bonfim",
    turno: "Vespertino",
    materia: "Matemática",
  },
  {
    id: 3,
    nome: "João Francisco",
    turno: "Noturno",
    materia: "Lógica",
  },
  {
    id: 4,
    nome: "José Barreto",
    turno: "Noturno",
    materia: "Lingua Inglesa",
  },
  {
    id: 5,
    nome: "Vera Lúcia",
    turno: "Noturno",
    materia: "Ética",
  },
];

let nextID = 6;

app.get("/professores", (req, res) => {
  res.json(list_teachers);
});

app.get("/professores/:idConsultado", (req, res) => {
  const instructor = list_teachers.find(
    (instructor) =>
      instructor.id === Number(req.params.idConsultado)
  );

  res.json(instructor);
});

app.post("/professores", (req, res) => {
  console.log(req.body);

  const new_teatcher = {
    id: nextID,
    nome: req.body.nome,
    turno: req.body.turno,
    materia: req.body.materia,
  };

  list_teachers.push(new_teatcher);

  nextID += 1;

  res.json(new_teatcher);
});

app.patch("/professores/:idConsultado", (req, res) => {
  const instructor = list_teachers.find(
    (instructor) =>
      instructor.id === Number(req.params.idConsultado)
  );

  if (req.body.nome != undefined) {
    instructor.nome = req.body.nome;
  }

  if (req.body.turno != undefined) {
    instructor.turno = req.body.turno;
  }

  if (req.body.materia != undefined) {
    instructor.materia = req.body.materia;
  }

  res.json(instructor);
});

app.put("/professores/:idConsultato", (req, res) => {
  const instructor = list_teachers.find(
    (instructor) =>
      instructor.id === Number(req.params.idConsultado)
  );

  const replace_teacher = {
    nome: req.body.nome,
    turno: req.body.turno,
    materia: req.body.materia,
  };

  if (instrutor) {
    replace_teacher;
    res.json(instructor);
  } else {
    const newTeacher = req.body;
    list_teachers.push(newTeacher);
    res.json(newTeacher);
  }
});

app.delete("/professores/:idConsultado", (req, res) => {
  const instructor = list_teachers.find(
    (instructor) =>
      instructor.id === Number(req.params.idConsultado)
  );

  const index_teacher = list_teachers.indexOf(instructor);

  list_teachers.splice(index_teacher, 1);

  res.json(instructor);
});

app.listen(8000);
