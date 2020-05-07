const getLinks = require("../database/queries/getLinks");

exports.getLinks = (req, res, next) => {
  getLinks()
    .then((result) => res.json(result))
    .catch((err) => next(err));
};
