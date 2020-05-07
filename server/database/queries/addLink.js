const dbConnection = require("./../db_connection");

const addLink = (name, img, description, url) => {
  return dbConnection
    .query(
      "insert into link (name, img, description,url) values ($1,$2,$3,$4)",
      [name, img, description, url]
    )
    .then((res) => "inserted")
    .catch((err) => err);
};

module.exports = addLink;
