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

  res.json(instructor);
}

function register_a_Teacher(req, res) {
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

module.exports =
  {consultTeachers,
  consult_a_Teacher,
  register_a_Teacher,
  edit_Teacher,
  replace_or_create,
  deleteRegistration};
