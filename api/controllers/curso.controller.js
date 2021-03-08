const db = require("../models/index");

const getAllCursos = (req, res) => {
  const result = db.curso.findAll({}).then((dataFromDb) => {
    res.status(200).send(
      dataFromDb.map((item) => {
        return {
          id: item.id,
          name: item.name,
        };
      }),
    );
  });
};

module.exports = {
  getAllCursos,
};
