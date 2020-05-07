const dbConnection = require("./../db_connection");

const getLinks = () => {
  return dbConnection
    .query("select * from link", [])
    .then((res) => res.rows)
    .catch((err) => err);
};

module.exports = getLinks;
