const list_teachers = require("../data/teachers");

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

let nextID = 6;

function teacher_Validation(instructor) {
  const shift = ["Matutino", "Vespertino", "Noturno"];

  if (!instructor.nome) {
    return "O campo nome é obrigatório";
  }

  if (!instructor.turno) {
    return "O campo turno deve ser preenchido.";
  }

  if (!instructor.materia) {
    return "O campo materia deve ser preenchido.";
  }

  if (typeof instructor.nome !== "string") {
    return "O campo nome deve ser preenchido como texto";
  }

  if (typeof instructor.turno !== "string") {
    return "O campo turno deve ser preenchido como texto";
  }

  if (typeof instructor.materia !== "string") {
    return "O campo materia deve ser preenchido como texto";
  }

  if (!shift.includes(instructor.turno)) {
    return "Turno inválido";
  }
}

function register_a_Teacher(req, res) {
  const erro = teacher_Validation(req.body);

  if (erro) {
    res.status(400);
    res.json({ erro });
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

  if (!instructor) {
    res.status(404);
    res.json({
      erro:
        "Professor " +
        req.params.idConsultado +
        " não foi encontrado.",
    });
    return;
  }

  const erro = teacher_Validation({
    nome: req.body.nome || instructor.nome,
    turno: req.body.turno || instructor.turno,
    materia: req.body.materia || instructor.materia,
  });

  if (erro) {
    res.status(400);
    res.json({
      erro,
    });
    return;
  }

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
  const erro = teacher_Validation(req.body);

  if (erro) {
    res.status(400);
    res.json({ erro });
    return;
  }

  if (req.body.id != Number(req.params.idConsultado)) {
    res.status(400);
    res.json({
      erro: "O id deve ser igual na rota e no corpo da requisição",
    });
    return;
  }

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

  if (!instructor) {
    res.status(404);
    res.json({
      erro:
        "Professor " +
        req.params.idConsultado +
        " não foi encontrado.",
    });
    return;
  }

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
