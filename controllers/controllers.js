const list_teachers = require("../data/teachers");
let nextID = 6;

function consultTeachers(req, res) {
  res.json(list_teachers);
}

function consult_a_Teacher(req, res) {
  const instructor = list_teachers.find(
    (instructor) =>
      instructor.id === Number(req.params.idConsultado)
  );

  if (!instructor) {
    res.status(404);
    res.json({
      erro:
        "Instrutor " +
        req.params.idConsultado +
        " não existe",
    });

    return;
  }

  res.json(instructor);
}

function register_a_Teacher(req, res) {
  const shift = ["Matutino", "Vespertino", "Noturno"];

  if (!req.body.nome) {
    res.status(400);
    res.json({
      erro: "O campo nome é obrigatório",
    });
    return;
  }

  if (!req.body.turno) {
    res.status(400);
    res.json({
      erro: "O campo turno deve ser preenchido.",
    });
    return;
  }

  if (!req.body.materia) {
    res.status(400);
    res.json({
      erro: "O campo materia deve ser preenchido.",
    });
    return;
  }

  if (typeof req.body.nome !== "string") {
    res.status(400);
    res.json({
      erro: "O campo nome deve ser preenchido como texto",
    });
  }

  if (typeof req.body.turno !== "string") {
    res.status(400);
    res.json({
      erro: "O campo turno deve ser preenchido como texto",
    });
  }

  if (typeof req.body.materia !== "string") {
    res.status(400);
    res.json({
      erro: "O campo materia deve ser preenchido como texto",
    });
  }

  if (!shift.includes(req.body.turno)) {
    res.status(400);
    res.json({
      erro: "Turno inválido",
    });

    return;
  }

  const new_teatcher = {
    id: nextID,
    nome: req.body.nome,
    turno: req.body.turno,
    materia: req.body.materia,
  };

  list_teachers.push(new_teatcher);

  nextID += 1;

  res.json(new_teatcher);
}

function edit_Teacher(req, res) {
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
}

function replace_or_create(req, res) {
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
}

function deleteRegistration(req, res) {
  const instructor = list_teachers.find(
    (instructor) =>
      instructor.id === Number(req.params.idConsultado)
  );

  const index_teacher = list_teachers.indexOf(instructor);

  list_teachers.splice(index_teacher, 1);

  res.json(instructor);
}

module.exports = {
  consultTeachers,
  consult_a_Teacher,
  register_a_Teacher,
  edit_Teacher,
  replace_or_create,
  deleteRegistration,
};
