const db = require("../dbConfig/init");

exports.getAll = async (req, res) => {
  try {
    const userData = await db.query(`SELECT * FROM users`);
    res.status(200).send(userData.rows);
  } catch (err) {
    res.send("somethingwentwrong.jpeg");
  }
};
exports.getOne = async (req, res) => {
  const { id } = req.params;
  const user = await db.query("SELECT * FROM users WHERE id=$1", [id]);
  res.status(200).json(user.rows[0]);
};

exports.create = async (req, res) => {
  try {
    db.query(
      "INSERT INTO users (username,password)\
        VALUES ($1,$2) RETURNING *",
      ["tommy hacker", "thispassword"]
    );
    res.send("user saved to db.");
  } catch (err) {
    res.send(err.message);
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const user = db.query("DELETE FROM users WHERE id=$1", [id]);
    res
      .status(204)
      .json({ success: true, message: `deleted user with id : ${id}` });
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};
