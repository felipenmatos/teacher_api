function nextRequest(req, res, next) {
  console.log(req.method, req.url);
  console.log("The body mensage", req.body);
  next();
}

function passwordValidation(req, res, next) {
  console.log("Intermediário 2", req.query);

  if (
    req.query.senha === "123456" ||
    req.method === "GET"
  ) {
    next();
  } else {
    res.status(401);
    res.json({ erro: "Senha incorreta" });
  }
}

module.exports = {
  nextRequest,
  passwordValidation,
};
