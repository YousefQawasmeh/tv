const addLink = require("../database/queries/addLink");

exports.addLink = (req, res, next) => {
  addLink({ ...req.body })
    .then((result) => res.redirect("/"))
    .catch((err) => next(err));
};
