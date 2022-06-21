const db = require('../dbConfig/init');

class User {
	constructor(data) {
		this.username = data.username;
		this.password = data.password;
	}
	static async findAll() {
		try {
			const res = await db.query('SELECT * FROM users;');
			const users = await res.rows.map((d) => new User(d));
			return users;
		} catch (err) {
			return err.message;
		}
	}
}

module.exports = User;
