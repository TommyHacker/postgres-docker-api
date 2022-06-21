const User = require('../models/User');

exports.getAll = async (req, res) => {
	const users = await User.findAll();
	res.status(200).json(users);
};
exports.getOne = async (req, res) => {
	const { id } = req.params;
	const user = await User.findOne(id);
	res.status(200).json(user);
};
