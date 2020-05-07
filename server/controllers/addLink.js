const addLink = require("../database/queries/addLink");

exports.addLink = (req, res, next) => {
  addLink({ ...req.body })
    .then((result) => res.json(result))
    .catch((err) => next(err));
};
