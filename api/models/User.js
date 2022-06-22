let randomArr = ["nothing", "in", "here", "yet"];
const db = require("../dbConfig/init");

class User {
  constructor(data) {
    this.username = data.username;
    this.password = data.password;
  }
  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const usersData = db.query("SELECT * FROM users");
        const users = usersData.rows.map((d) => "hello");
        if (!users.length) {
          throw new Error("no users here!");
        }
        resolve(users);
      } catch (err) {
        reject(`Error retrieving users: ${err.message}`);
      }
    });
  }
}

module.exports = User;
